import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#ffffff", height: 60 },
        tabBarActiveTintColor: "#4D61D9",
        tabBarInactiveTintColor: "#8b8b8b",
      }}
    >
      <Tabs.Screen
        name="learn"
        options={{
          title: "Aprender",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="dictionary"
        options={{
          title: "Diccionario",
          tabBarIcon: ({ color }) => (
            <Ionicons name="book-outline" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
