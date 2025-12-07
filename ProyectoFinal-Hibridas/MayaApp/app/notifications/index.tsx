import { View, Text } from "react-native";

export default function Screen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F7FA",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
        Pantalla en construcción
      </Text>
    </View>
  );
}
