import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";

export default function HeaderCard() {
  return (
    <LinearGradient
      colors={["#7C3AED", "#6366F1"]}
      style={{
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "700", color: "white" }}>
        Aprende Maya
      </Text>
      <Text style={{ fontSize: 15, color: "white", opacity: 0.9, marginTop: 3 }}>
        Avanza en tu camino lingüístico
      </Text>
    </LinearGradient>
  );
}
