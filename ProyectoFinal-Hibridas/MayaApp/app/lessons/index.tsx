import { View, Text, Button } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

export default function Lessons() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lecciones</Text>

      <Link href="/lessons/1">
        <Button title="Lección 1" />
      </Link>

      <Link href="/lessons/2">
        <Button title="Lección 2" />
      </Link>
    </View>
  );
}
