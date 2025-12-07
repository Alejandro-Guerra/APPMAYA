import { View, Text } from "react-native";
import LessonCard from "./LessonCard";

export default function UnitCard({ title, subtitle, percentage, lessons }) {
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
      <Text style={{ fontSize: 18, fontWeight: "700" }}>{title}</Text>
      <Text style={{ opacity: 0.7, marginBottom: 12 }}>{subtitle}</Text>

      {/* Barra */}
      <View style={{
        width: "100%",
        height: 10,
        backgroundColor: "#eee7ff",
        borderRadius: 8,
        marginBottom: 12,
      }}>
        <View style={{
          width: `${percentage}%`,
          height: "100%",
          borderRadius: 8,
          backgroundColor: "#7C3AED",
        }} />
      </View>

      {/* Lecciones */}
      {lessons.map((l, i) => (
        <LessonCard key={i} title={l.title} icon={l.icon} />
      ))}
    </View>
  );
}
