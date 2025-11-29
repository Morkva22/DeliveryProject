import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { colors } from '../components/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarStyle:
                    {
                        backgroundColor: "#0c0c0f",
                        borderTopColor: "#1c1c22",
                    },
                tabBarActiveTintColor: colors.red,
                tabBarInactiveTintColor: "#6b6b78",
                headerShown: false,
                tabBarLabelStyle:
                    {
                        fontWeight: 600,
                        letterSpacing: 0.3
                    },
                sceneStyle: { backgroundColor: "#0a0a0d" },
                tabBarHideOnKeyboard: true
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Ionicons size={size} name="home-outline" color={color}/>,
                }}
            />

            <Tabs.Screen
                name="promotions"
                options={{
                    title: 'Promotions',
                    tabBarIcon: ({ color, size }) => <Ionicons size={size} name="sparkles-outline" color={color}/>,
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => <Ionicons size={size} name="settings-outline" color={color}/>,
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color, size }) => <Ionicons size={size} name="cart-outline" color={color}/>,
                }}
            />
        </Tabs>
    );
}
