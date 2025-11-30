import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../components/Colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.red,
                tabBarInactiveTintColor: '#6b6b78',
                tabBarStyle: {
                    backgroundColor: '#0c0c0f',
                    borderTopColor: '#1c1c22',
                    height: 64,
                    paddingBottom: 10,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontWeight: '600',
                    fontSize: 11,
                },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                }}
            />

            <Tabs.Screen
                name="promotions"
                options={{
                    title: 'Promotions',
                    tabBarIcon: ({ color, size }) => <Ionicons name="flame-outline" size={size} color={color} />,
                }}
            />

            <Tabs.Screen
                name="wishlist"
                options={{
                    title: 'Wishlist',
                    tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" size={size} color={color} />,
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />,
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
                }}
            />

            <Tabs.Screen name="index" options={{ href: null }} />
            <Tabs.Screen name="explore" options={{ href: null }} />
        </Tabs>
    );
}