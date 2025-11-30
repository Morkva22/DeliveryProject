import { mockItemData } from "../components/MockData";
import type { Item as ItemType } from "../components/MockData";

import { useState } from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, interpolate } from "react-native-reanimated";

import Header from "../components/Header";
import ListItem from "../components/ItemList";
import { ToastNotification } from "../components/ToastNotification";
import { useToastStore } from "../store/ToastStore";

import { colors } from "../components/Colors";

export default function HomeScreen() {
    const [filteredData, setFilteredData] = useState(mockItemData);

    const toastMessage = useToastStore((state) => state.message);
    const toastVisible = useToastStore((state) => state.visible);
    const hideToast = useToastStore((state) => state.hideToast);

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        }
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            paddingTop: interpolate(scrollY.value, [0, 100], [0, 30]),
            marginBottom: interpolate(scrollY.value, [0, 100], [0, -100]),
            opacity: interpolate(scrollY.value, [0, 50], [1, 0]),
            transform: [
                {
                    translateY: interpolate(scrollY.value, [0, 100], [0, -30])
                }
            ]
        };
    });

    const onSearch = (text: string) => {
        const filteredItms = mockItemData.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filteredItms);
    };

    const togglePizzaSize = (itemId: ItemType) => {
        const updatedData = filteredData.map((item) => {
            if (item.id === itemId.id) {
                const newSize = item.selectedSize === 32 ? 42 : 32;
                return { ...item, selectedSize: newSize };
            }
            return item;
        });
        setFilteredData(updatedData);
    };

    return (
        <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.gradient}>
            <SafeAreaView style={styles.container}>
                <Animated.View style={[animatedTextStyle, styles.headerWrapper]}>
                    <Header onSearch={onSearch} />
                </Animated.View>

                <ScrollView style={styles.itemsContainer}>
                    {filteredData.map((item, index) => (
                        <ListItem
                            key={index}
                            index={index}
                            item={item}
                            togglePizzaSize={togglePizzaSize}
                        />
                    ))}
                </ScrollView>

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
    headerWrapper: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    itemsContainer: {
        marginTop: 16
    }
});