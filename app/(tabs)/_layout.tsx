import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#717171',
         tabBarInactiveTintColor: '#dcdbdb',
        headerShown: false,
        tabBarButton: HapticTab,

        tabBarStyle: {
          backgroundColor: '#b20000',
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >

      {/* Tela Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Escola',

          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="school"
              size={28}
              color={color}
            />
          ),
        }}
      />

      {/* Tela Explore */}
      <Tabs.Screen
        name="1MIN"
        options={{
          title: '1MIN',

          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="menu-book"
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="2MIN"
        options={{
          title: '2MIN',

          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="menu-book"
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="3MIN"
        options={{
          title: '3MIN',

          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="menu-book"
              size={28}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
}