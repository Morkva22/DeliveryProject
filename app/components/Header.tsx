import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Modal } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "./Colors";
import { useOrderWishStore } from "../store/indexWishStore";
import { useOrderStore } from "../store";

type HeaderProps = {
    onSearch: (text: string) => void;
};

const categories = ["Pizza", "Sushi", "Burgers", "Lunch", "Sets", "Combo"];

const Header = ({ onSearch }: HeaderProps) => {
    const [searchText, setSearchText] = useState("");
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("Pizza");

    const inputRef = useRef<TextInput>(null);
    const router = useRouter();

    const wishlistCount = useOrderWishStore((state) => state.orders.length);
    const cartCount = useOrderStore((state) => state.orders.length);

    const handleSearch = (text: string) => {
        setSearchText(text);
        onSearch(text);
    };

    const toggleSearch = () => {
        const next = !isSearchVisible;
        setIsSearchVisible(next);

        if (next) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 50);
        } else {
            setSearchText("");
            onSearch("");
        }
    };

    const navigateToWishlist = () => {
        router.push("/(tabs)/wishlist");
    };

    const navigateToCart = () => {
        router.push("/(tabs)/cart");
    };

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.topBar}>
                    <View style={styles.logoRow}>
                        <Text style={styles.logo}>PRONTO</Text>
                        <Text style={styles.logoSub}>Pizza & Sushi</Text>
                    </View>

                    <View style={styles.actions}>

                        <TouchableOpacity onPress={toggleSearch}>
                            <Ionicons name="search" size={22} color={colors.title} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToWishlist} style={styles.iconButton}>
                            <Ionicons name="heart" size={22} color={colors.title} />
                            {wishlistCount > 0 && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{wishlistCount}</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToCart} style={styles.iconButton}>
                            <Ionicons name="cart" size={22} color={colors.title} />
                            {cartCount > 0 && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{cartCount}</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {isSearchVisible && (
                    <View style={styles.searchRow}>
                        <Ionicons name="search" size={18} color={colors.grey} />

                        <TextInput
                            ref={inputRef}
                            value={searchText}
                            placeholder="Search pizzas, drinks, toppings..."
                            placeholderTextColor={colors.grey}
                            onChangeText={handleSearch}
                            style={styles.input}
                        />
                    </View>
                )}

                <View style={styles.tabWrapper}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.tabRow}
                    >
                        {categories.map((tab) => (
                            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                                <View style={[styles.tab, activeTab === tab && styles.activeTab]}>
                                    <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                                        {tab}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -16,
        paddingHorizontal: 16
    },
    inner: {
        paddingVertical: 12,
        gap: 12
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoRow: {
        gap: 2
    },
    logo: {
        color: colors.title,
        fontWeight: "900",
        fontSize: 18,
        letterSpacing: 0.5
    },
    logoSub: {
        color: colors.grey,
        fontSize: 12
    },
    actions: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center"
    },
    iconButton: {
        position: "relative"
    },
    badge: {
        position: "absolute",
        top: -6,
        right: -8,
        backgroundColor: colors.red,
        borderRadius: 10,
        minWidth: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 4
    },
    badgeText: {
        color: colors.white,
        fontSize: 10,
        fontWeight: "700"
    },
    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.itemBackground,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: colors.borderMuted,
        paddingHorizontal: 12,
        paddingVertical: 10,
        gap: 10
    },
    input: {
        flex: 1,
        color: colors.title,
        fontSize: 15
    },
    tabWrapper: {
        marginHorizontal: 0,
        paddingHorizontal: 0
    },
    tabRow: {
        gap: 10,
        marginTop: 6,
        paddingRight: 24
    },
    tab: {
        backgroundColor: colors.tab,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.borderMuted
    },
    activeTab: {
        backgroundColor: colors.white,
        borderColor: colors.white
    },
    tabText: {
        color: colors.textColor,
        fontWeight: "700"
    },
    tabTextActive: {
        color: colors.black
    }
});

export default Header;