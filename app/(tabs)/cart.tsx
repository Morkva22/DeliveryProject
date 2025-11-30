import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { useOrderStore } from "../store";
import { useToastStore } from "../store/ToastStore";
import { ToastNotification } from "../components/ToastNotification";
import type { OrderItem } from "../store";
import { colors } from "../components/Colors";

export default function CartScreen() {
    const orders = useOrderStore((state) => state.orders);
    const removeOrder = useOrderStore((state) => state.removeOrder);
    const increaseQuantity = useOrderStore((state) => state.increaseQuantity);
    const decreaseQuantity = useOrderStore((state) => state.decreaseQuantity);
    const clearOrders = useOrderStore((state) => state.clearOrders);

    const showToast = useToastStore((state) => state.showToast);
    const toastMessage = useToastStore((state) => state.message);
    const toastVisible = useToastStore((state) => state.visible);
    const hideToast = useToastStore((state) => state.hideToast);

    const calculateTotal = () => {
        return orders.reduce((total, item) => {
            const quantity = item.quantity || 1;
            let itemPrice = 0;

            if (typeof item.price === "string") {
                itemPrice = parseFloat(item.price.replace("$", ""));
            } else if (item.price && typeof item.price === "object") {
                itemPrice = item.price.price || 0;
            }

            return total + itemPrice * quantity;
        }, 0);
    };

    const handleRemoveItem = (item: OrderItem) => {
        removeOrder(item);
        showToast("Removed from cart");
    };

    const handleClearCart = () => {
        if (orders.length > 0) {
            clearOrders();
            showToast("Cart cleared");
        }
    };

    const handleCheckout = () => {
        if (orders.length > 0) {
            showToast("Order placed successfully!");
        }
    };

    const renderItem = ({ item }: { item: OrderItem }) => {
        let itemPrice = 0;
        let priceDisplay = "$0.00";

        if (typeof item.price === "string") {
            priceDisplay = item.price;
            itemPrice = parseFloat(item.price.replace("$", ""));
        } else if (item.price && typeof item.price === "object") {
            priceDisplay = item.price.pricePizza || "$0.00";
            itemPrice = item.price.price || 0;
        }

        const quantity = item.quantity || 1;
        const totalItemPrice = (itemPrice * quantity).toFixed(2);

        return (
            <TouchableOpacity style={styles.itemContainer}>
                <LinearGradient
                    colors={["#1b1D23", "#111217"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradientCard}
                >
                    <View style={styles.item}>
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemTitle}>{item.type || "Item"}</Text>

                            <View style={styles.priceContainer}>
                                <Text style={styles.priceText}>{priceDisplay}</Text>
                                <View style={styles.sizeBadge}>
                                    <Text style={styles.sizeBadgeText}>
                                        {item.selectedSize || item.volume} {item.type === "pizza" ? "cm" : ""}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.quantityContainer}>
                                <TouchableOpacity
                                    onPress={() => decreaseQuantity(item)}
                                    style={styles.quantityButton}
                                    activeOpacity={0.7}
                                >
                                    <Ionicons name="remove" size={18} color={colors.white} />
                                </TouchableOpacity>

                                <Text style={styles.quantityText}>{quantity}</Text>

                                <TouchableOpacity
                                    onPress={() => increaseQuantity(item)}
                                    style={styles.quantityButton}
                                    activeOpacity={0.7}
                                >
                                    <Ionicons name="add" size={18} color={colors.white} />
                                </TouchableOpacity>

                                <Text style={styles.totalPrice}>${totalItemPrice}</Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => handleRemoveItem(item)}
                                style={styles.removeButton}
                                activeOpacity={0.7}
                            >
                                <Ionicons name="trash-outline" size={16} color={colors.red} />
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    };

    const renderEmptyList = () => (
        <View style={styles.emptyContainer}>
            <Ionicons name="cart-outline" size={80} color={colors.grey} />
            <Text style={styles.emptyTitle}>Your Cart is Empty</Text>
            <Text style={styles.emptySubtitle}>Add some items to get started</Text>
        </View>
    );

    return (
        <LinearGradient
            colors={[colors.gradientStart, colors.gradientEnd]}
            style={styles.gradient}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Shopping Cart</Text>
                    <Text style={styles.headerSubtitle}>
                        {orders.length} {orders.length === 1 ? "item" : "items"}
                    </Text>
                    {orders.length > 0 && (
                        <TouchableOpacity onPress={handleClearCart} style={styles.clearButton}>
                            <Text style={styles.clearButtonText}>Clear All</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <FlatList
                    data={orders}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${item.id}-${item.selectedSize}-${index}`}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={renderEmptyList}
                    showsVerticalScrollIndicator={false}
                />

                {orders.length > 0 && (
                    <View style={styles.footer}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalLabel}>Total:</Text>
                            <Text style={styles.totalAmount}>${calculateTotal().toFixed(2)}</Text>
                        </View>

                        <TouchableOpacity
                            onPress={handleCheckout}
                            style={styles.checkoutButton}
                            activeOpacity={0.7}
                        >
                            <Ionicons name="checkmark-circle" size={22} color={colors.white} />
                            <Text style={styles.checkoutButtonText}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <ToastNotification
                    message={toastMessage}
                    visible={toastVisible}
                    onHide={hideToast}
                />
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    container: {
        flex: 1
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerTitle: {
        color: colors.title,
        fontSize: 28,
        fontWeight: "900"
    },
    headerSubtitle: {
        color: colors.grey,
        fontSize: 14,
        flex: 1,
        marginLeft: 12
    },
    clearButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.red
    },
    clearButtonText: {
        color: colors.red,
        fontSize: 12,
        fontWeight: "600"
    },
    listContent: {
        paddingTop: 8,
        paddingBottom: 20,
        flexGrow: 1
    },
    itemContainer: {
        marginBottom: 16
    },
    gradientCard: {
        marginHorizontal: 14,
        borderRadius: 16,
        padding: 1
    },
    item: {
        backgroundColor: colors.panel,
        padding: 16,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.shadowBorderColor
    },
    itemDetails: {
        flex: 1
    },
    itemTitle: {
        color: colors.title,
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 8,
        textTransform: "capitalize"
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        gap: 12
    },
    priceText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "700"
    },
    sizeBadge: {
        backgroundColor: colors.mainColor,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8
    },
    sizeBadgeText: {
        color: colors.black,
        fontSize: 12,
        fontWeight: "700"
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 12
    },
    quantityButton: {
        backgroundColor: colors.red,
        width: 32,
        height: 32,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    quantityText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "700",
        minWidth: 30,
        textAlign: "center"
    },
    totalPrice: {
        color: colors.mainColor,
        fontSize: 18,
        fontWeight: "700",
        marginLeft: "auto"
    },
    removeButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        alignSelf: "flex-start"
    },
    removeButtonText: {
        color: colors.red,
        fontSize: 14,
        fontWeight: "600"
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 120
    },
    emptyTitle: {
        color: colors.title,
        fontSize: 22,
        fontWeight: "700",
        marginTop: 20,
        marginBottom: 8
    },
    emptySubtitle: {
        color: colors.grey,
        fontSize: 14
    },
    footer: {
        backgroundColor: colors.panel,
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: colors.shadowBorderColor
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
    },
    totalLabel: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "700"
    },
    totalAmount: {
        color: colors.mainColor,
        fontSize: 24,
        fontWeight: "900"
    },
    checkoutButton: {
        backgroundColor: colors.red,
        paddingVertical: 16,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
    },
    checkoutButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "700"
    }
});