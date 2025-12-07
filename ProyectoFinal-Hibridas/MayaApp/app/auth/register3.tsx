import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import styles from "./register.styles";
import { getItem, saveItem, removeItem } from "../utils/storage";

type TempUser = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthday?: string;
  gender?: string;
  country?: string;
  language?: string;
  avatar?: string;
  level?: string;
  streak?: number;
  points?: number;
  lessonsCompleted?: number;
  accuracy?: number;
};

const avatars = [
  require("../../assets/icons/avatar1.png"),
  require("../../assets/icons/avatar2.png"),
  require("../../assets/icons/avatar3.png"),
  require("../../assets/icons/avatar4.png"),
  require("../../assets/icons/avatar5.png"),
];

export default function Register3() {
  const router = useRouter();
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
  const [userName, setUserName] = useState<string | null>(null);

  // CARGAR TEMPUSER
  useEffect(() => {
    (async () => {
      const stored = await getItem("tempUser");

      if (stored) {
        try {
          const parsed: TempUser = JSON.parse(stored);

          if (parsed.name) setUserName(parsed.name);

          if (parsed.avatar) {
            const index = Number(parsed.avatar.replace("avatar", "")) - 1;
            if (!isNaN(index) && index >= 0 && index < avatars.length) {
              setSelectedAvatarIndex(index);
            }
          }
        } catch (e) {
          console.log("Error parseando tempUser:", e);
        }
      }
    })();
  }, []);

  // FINALIZAR REGISTRO
  const handleFinish = async () => {
    const stored = await getItem("tempUser");

    if (!stored) {
      Alert.alert("Error", "Faltan datos del registro. Vuelve a comenzar.");
      router.replace("/auth/register1");
      return;
    }

    let draft: TempUser;

    try {
      draft = JSON.parse(stored);
    } catch {
      Alert.alert("Error", "No se pudo leer la información del usuario.");
      return;
    }

    const avatarKey = `avatar${selectedAvatarIndex + 1}`;

    const finalUser: TempUser = {
      ...draft,
      avatar: avatarKey,
      level: draft.level || "Principiante",
      streak: draft.streak ?? 0,
      points: draft.points ?? 0,
      lessonsCompleted: draft.lessonsCompleted ?? 0,
      accuracy: draft.accuracy ?? 0,
    };

    // GUARDAR DEFINITIVO
    await saveItem("user", JSON.stringify(finalUser));
    await removeItem("tempUser");

    router.replace("/home");
  };

  return (
    <LinearGradient colors={["#7C3AED", "#4F46E5"]} style={styles.gradient}>
      <KeyboardAvoidingView
        style={styles.gradient}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>Último paso</Text>
            <Text style={styles.subtitle}>Paso 3 de 3 - Personaliza tu perfil</Text>

            {userName && (
              <Text style={{ marginBottom: 14, fontWeight: "600", textAlign: "center" }}>
                Hola, {userName} 👋
              </Text>
            )}

            <Text style={{ marginBottom: 10, fontWeight: "600" }}>Elige un avatar</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              {avatars.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedAvatarIndex(index)}
                  style={{
                    borderWidth: selectedAvatarIndex === index ? 2 : 0,
                    borderColor: "#6366F1",
                    borderRadius: 999,
                    padding: 2,
                  }}
                >
                  <Image
                    source={img}
                    style={{ width: 60, height: 60, borderRadius: 999 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
              <Text style={styles.buttonText}>Finalizar →</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 10 }}>
              <Text style={styles.backLink}>← Atrás</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
