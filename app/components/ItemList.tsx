import { useOrderStore } from "../store";
import type { Item as ItemType } from "./MockData";
import type { OrderItem } from "../store";

import React from "react";

import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./Colors";

type ItemListProps =
    {
        item: ItemType,
        index: string | number,
        togglePizzaSize: (itemId: ItemType) => void
    };

const ListItem = ({ item, togglePizzaSize }: ItemListProps) =>
{
    const addOrder = useOrderStore((state) => state.setOrders);
    const getPriceForSize = useOrderStore((state) => state.getPriceForSize);

    const onItemBuy = (pressedItem: ItemType) =>
    {
        // ensure the object satisfies OrderItem by adding the required `volume` field
        const orderCandidate = { ...pressedItem, volume: String(pressedItem.selectedSize) } as OrderItem;
        const priceForSize = getPriceForSize(orderCandidate);
        addOrder({ ...orderCandidate, price: priceForSize });
    }

    return (
        <TouchableOpacity style={styles.itemContainer}>
            <LinearGradient colors={["#1b1D23", "#111217"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradientCard}>
                <View style={styles.item}>
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image}/>
                        {
                            item.isNew &&
                            (
                                <View style={styles.badgeNew}>
                                    <Text style={styles.badgeText}>NEW</Text>
                                </View>
                            )
                        }
                        {
                            !item.isNew &&
                            (
                                <View style={[styles.badgeNew, styles.badgeHit]}>
                                    <Text style={styles.badgeText}>HIT</Text>
                                </View>
                            )
                        }
                    </View>

                    <View style={styles.itemDetails}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceText}>{item.selectedSize === 32 ? item.newPrice : item.size42}</Text>

                            <TouchableOpacity onPress={() => onItemBuy(item)} style={styles.orderButton}>
                                <Text style={styles.orderButtonText}>Order</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.sizeSelector}>
                            <TouchableOpacity onPress={() => togglePizzaSize(item)} style={[styles.sizeOption, item.selectedSize === 32 ? styles.selectedSize : null ]}>
                                {
                                    item.selectedSize === 32 ?
                                        (<Image source={require("../../assets/images/icon-diameter.png")} style={styles.sizeIcon}/>)
                                        :
                                        (<Image source={require("../../assets/images/icons-diameter.png")} style={styles.sizeIcon}/>)
                                }
                                <Text style={[styles.sizeText, item.selectedSize === 32 ? styles.selectedSizeText : null]}>32 cm</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => togglePizzaSize(item)} style={[styles.sizeOption, item.selectedSize === 42 ? styles.selectedSize : null ]}>
                                {
                                    item.selectedSize === 42 ?
                                        (<Image source={require("../../assets/images/icon-diameter.png")} style={styles.sizeIcon}/>)
                                        :
                                        (<Image source={require("../../assets/images/icons-diameter.png")} style={styles.sizeIcon}/>)
                                }
                                <Text style={[styles.sizeText, item.selectedSize === 42 ? styles.selectedSizeText : null]}>42 cm</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.itemTitle2}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description?.slice(0, 60).concat("...")}</Text>
                        <Text style={styles.itemWeight}>{item.selectedSize === 32 ? item.weight32 : item.weight42}</Text>
                    </View>

                    <View style={styles.likeIconContainer}>
                        <TouchableOpacity>
                            <Image style={styles.likeIcon} source={require("../../assets/images/pizzaScreen/icon-like.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create
(
    {
        itemContainer:
            {
                marginBottom: 16
            },
        gradientCard:
            {
                marginHorizontal: 14,
                borderRadius: 16,
                padding: 1
            },
        item:
            {
                backgroundColor: colors.panel,
                padding: 12,
                gap: 12,
                minHeight: 120,
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 14,
                borderWidth: 1,
                borderColor: colors.shadowBorderColor,
            },
        imageContainer:
            {
                width: 110,
                justifyContent: "center",
                alignItems: "center",
            },
        image:
            {
                width: 110,
                height: 110,
                resizeMode: "cover",
                borderRadius: 12
            },
        badgeNew:
            {
                position: "absolute",
                top: 6,
                left: 6,
                backgroundColor: colors.red,
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 10
            },
        badgeHit:
            {
                backgroundColor: colors.green
            },
        badgeText:
            {
                color: colors.white,
                fontWeight: "700",
                fontSize: 11
            },
        itemDetails:
            {
                width: "80%",
                justifyContent: "center",
            },
        itemTitle:
            {
                color: colors.title,
                fontSize: 18,
                fontWeight: "700",
                marginBottom: 8
            },
        priceText:
            {
                color: colors.white,
                fontSize: 18,
                fontWeight: "700"
            },
        priceContainer:
            {
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
                gap: 16
            },
        sizeText:
            {
                color: colors.white,
                fontSize: 14,
                fontWeight: "600"
            },
        orderButton:
            {
                borderWidth: 2,
                borderColor: colors.red,
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 12
            },
        orderButtonText:
            {
                color: colors.white,
                fontWeight: "700"
            },
        sizeSelector:
            {
                flexDirection: "row",
                gap: 12,
                marginBottom: 8
            },
        sizeOption:
            {
                borderWidth: 0.5,
                borderColor: colors.borderMuted,
                paddingHorizontal: 8,
                paddingVertical: 8,
                borderRadius: 6,
                flexDirection: "row",
                alignItems: "center",
                gap: 6
            },
        selectedSize:
            {
                borderWidth: 2,
                backgroundColor: colors.mainColor
            },
        selectedSizeText:
            {
                color: colors.black
            },
        sizeIcon:
            {
                width: 24,
                height: 24,
                resizeMode: "contain"
            },
        itemTitle2:
            {
                color: colors.title,
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 8
            },
        itemDescription:
            {
                width: "60%",
                color: colors.white,
                fontSize: 12,
                marginBottom: 8
            },
        itemWeight:
            {
                color: colors.grey,
                fontSize: 12
            },
        likeIconContainer:
            {
                position: "absolute",
                top: 12,
                right: 12
            },
        likeIcon:
            {
                width: 24,
                height: 24,
                resizeMode: "contain"
            }
    }
);

export default ListItem;
