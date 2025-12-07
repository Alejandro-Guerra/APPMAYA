import { View, Text } from "react-native";

export default function ProgressCard({ percentage }) {
  return (
    <View style={{
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,

      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 8,
    }}>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>Progreso general</Text>

      {/* Barra */}
      <View style={{
        width: "100%",
        height: 12,
        backgroundColor: "#e1dfff",
        borderRadius: 8,
        marginTop: 14,
      }}>
        <View style={{
          width: `${percentage}%`,
          height: "100%",
          borderRadius: 8,
          backgroundColor: "#7C3AED",
        }} />
      </View>

      <Text style={{ marginTop: 8, fontWeight: "600" }}>
        {percentage}%
      </Text>
    </View>
  );
}
