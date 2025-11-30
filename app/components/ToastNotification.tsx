import React, { useEffect } from "react";
import { StyleSheet, Text, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./Colors";

type ToastProps = {
    message: string;
    visible: boolean;
    onHide: () => void;
};

export const ToastNotification = ({ message, visible, onHide }: ToastProps) => {
    const translateY = React.useRef(new Animated.Value(-100)).current;
    const opacity = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                })
            ]).start();

            const timer = setTimeout(() => {
                Animated.parallel([
                    Animated.timing(translateY, {
                        toValue: -100,
                        duration: 300,
                        useNativeDriver: true
                    }),
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true
                    })
                ]).start(() => {
                    onHide();
                });
            }, 2500);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!visible) return null;

    const getIconName = () => {
        if (message.includes("wishlist")) return "heart";
        if (message.includes("cart")) return "cart";
        if (message.includes("Removed")) return "trash";
        return "checkmark-circle";
    };

    return (
        <Animated.View
            style={[
                styles.toastContainer,
                {
                    transform: [{ translateY }],
                    opacity
                }
            ]}
        >
            <Ionicons name={getIconName()} size={22} color={colors.white} />
            <Text style={styles.toastText}>{message}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    toastContainer: {
        position: "absolute",
        top: 60,
        left: 20,
        right: 20,
        backgroundColor: "rgba(0, 0, 0, 0.92)",
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        borderWidth: 1,
        borderColor: colors.red,
        zIndex: 9999,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10
    },
    toastText: {
        color: colors.white,
        fontSize: 15,
        fontWeight: "600",
        flex: 1
    }
});