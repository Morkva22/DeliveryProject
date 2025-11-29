import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { colors } from "./Colors";

type HeaderProps=
{
    onSearch:(text: string) => void
};

const categories=["Pizza", "Sushi", "Burgers","Lunch", "Sets", "Combo"];

const Header=({onSearch}:HeaderProps) =>
{
    const [searchText, setSearchText]= useState("")
    const [isSearchVisible, setIsSearchVisible]= useState(false)
    const [activeTab, setActiveTab]= useState("Pizza")
    
    const inputRef = useRef<TextInput>(null);

    const handleSearch = (text: string) =>
    {
        setSearchText(text);
        onSearch(text);
    }
    const toggleSearch = () =>
    {
        const next = !isSearchVisible;
        setIsSearchVisible(next);

        if (next) { setTimeout(() => { inputRef.current?.focus(); }, 50); }
        else { setSearchText(""); onSearch(""); }
    }

    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.topBar}>
                    <View style={styles.logoRow}>
                        <Text style={styles.logo}>PRONTO</Text>
                        <Text style={styles.logoSub}>Pizza & Sushi</Text>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity onPress={toggleSearch}>
                            <Image source={require("../../assets/images/header/icon-search.png")} style={styles.smallIcon}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require("../../assets/images/header/icon-like.png")} style={styles.smallIcon}/>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require("../../assets/images/homeScreen/icon-basket.png")} style={styles.smallIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>

                {
                    isSearchVisible &&
                    (
                        <View style={styles.searchRow}>
                            <Image source={require("../../assets/images/header/icon-search.png")} style={styles.searchIcon}/>

                            <TextInput
                                ref={inputRef} value={searchText}
                                placeholder="Search pizzas, drinks, toppings..." placeholderTextColor={colors.grey}
                                onChangeText={handleSearch}
                                style={styles.input}
                            />
                        </View>
                    )
                }

                <View style={styles.tabWrapper}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.tabRow}
                    >
                        {
                            categories.map
                            (
                                (tab) =>
                                (
                                    <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                                        <View style={[styles.tab, activeTab === tab && styles.activeTab]}>
                                            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                                                {tab}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create
(
    {
        container:
        {
            marginHorizontal: -16,
            paddingHorizontal: 16
        },
        inner:
        {
            paddingVertical: 12,
            gap: 12
        },
        topBar:
        {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        logoRow:
        {
            gap: 2
        },
        logo:
        {
            color: colors.title,
            fontWeight: "900",
            fontSize: 18,
            letterSpacing: 0.5
        },
        logoSub:
        {
            color: colors.grey,
            fontSize: 12
        },
        actions:
        {
            flexDirection: "row",
            gap: 12
        },
        smallIcon:
        {
            width: 22,
            height: 22,
            tintColor: colors.title
        },
        searchRow:
        {
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
        searchIcon:
        {
            width: 18,
            height: 18,
            tintColor: colors.grey
        },
        input:
        {
            flex: 1,
            color: colors.title,
            fontSize: 15
        },
        tabWrapper:
        {
            marginHorizontal: 0,
            paddingHorizontal: 0
        },
        tabRow:
        {
            gap: 10,
            marginTop: 6,
            paddingRight: 24
        },
        tab:
        {
            backgroundColor: colors.tab,
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.borderMuted
        },
        activeTab:
        {
            backgroundColor: colors.white,
            borderColor: colors.white
        },
        tabText:
        {
            color: colors.textColor,
            fontWeight: "700"
        },
        tabTextActive:
        {
            color: colors.black
        }
    }
);

export default Header;