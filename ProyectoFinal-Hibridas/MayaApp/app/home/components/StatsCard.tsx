import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function StatsCard({ icon, label, value }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "white",
      paddingVertical: 18,
      paddingHorizontal: 15,
      borderRadius: 16,
      marginHorizontal: 4,
      alignItems: "center",
      justifyContent: "center",

      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 8,
    }}>
      <MaterialCommunityIcons name={icon} size={28} color="#7C3AED" />
      <Text style={{ fontSize: 13, marginTop: 4, opacity: 0.7 }}>{label}</Text>
      <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 3 }}>{value}</Text>
    </View>
  );
}
