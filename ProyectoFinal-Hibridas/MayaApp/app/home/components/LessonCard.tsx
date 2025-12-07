import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LessonCard({ title, icon }) {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
      marginBottom: 8,
      backgroundColor: "#f6f5ff",
      borderRadius: 12,
    }}>
      <MaterialCommunityIcons
        name={icon}
        size={26}
        color="#7C3AED"
        style={{ marginHorizontal: 12 }}
      />

      <Text style={{ fontSize: 15 }}>{title}</Text>
    </View>
  );
}
