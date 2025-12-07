import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import styles from "./styles";

export default function LessonDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lección {id}</Text>
      <Text>Contenido de la lección...</Text>
    </View>
  );
}
