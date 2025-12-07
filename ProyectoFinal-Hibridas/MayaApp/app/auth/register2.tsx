import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import styles from "./register.styles";
import { getItem, saveItem } from "../utils/storage";

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
};

export default function Register2() {
  const router = useRouter();

  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  // Cargar datos pre-guardados
  useEffect(() => {
    (async () => {
      const stored = await getItem("tempUser");
      if (stored) {
        try {
          const parsed: TempUser = JSON.parse(stored);

          if (parsed.birthday) setBirthday(parsed.birthday);
          if (parsed.gender) setGender(parsed.gender);
          if (parsed.country) setCountry(parsed.country);
          if (parsed.language) setLanguage(parsed.language);

        } catch (e) {
          console.log("Error cargando tempUser en Register2:", e);
        }
      }
    })();
  }, []);

  const handleNext = async () => {
    if (!birthday.trim() || !gender.trim() || !country.trim() || !language.trim()) {
      Alert.alert("Campos incompletos", "Completa toda la información para continuar.");
      return;
    }

    const stored = await getItem("tempUser");
    if (!stored) {
      Alert.alert("Error", "Primero completa el Paso 1.");
      router.replace("/auth/register1");
      return;
    }

    let draft: TempUser;
    try {
      draft = JSON.parse(stored);
    } catch {
      Alert.alert("Error", "No se pudo actualizar la información.");
      return;
    }

    const updated = {
      ...draft,
      birthday,
      gender,
      country,
      language,
    };

    await saveItem("tempUser", JSON.stringify(updated));
    router.push("/auth/register3");
  };

  return (
    <LinearGradient colors={["#7C3AED", "#4F46E5"]} style={styles.gradient}>
      <KeyboardAvoidingView
        style={styles.gradient}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Información personal</Text>
            <Text style={styles.subtitle}>Paso 2 de 3 - Datos adicionales</Text>

            {/* FECHA DE NACIMIENTO */}
            <TextInput
              placeholder="Fecha de nacimiento (DD/MM/AAAA)"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              value={birthday}
              onChangeText={setBirthday}
            />

            {/* GÉNERO */}
            <TextInput
              placeholder="Género"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              value={gender}
              onChangeText={setGender}
            />

            {/* PAÍS */}
            <TextInput
              placeholder="País"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              value={country}
              onChangeText={setCountry}
            />

            {/* IDIOMA */}
            <TextInput
              placeholder="Idioma"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              value={language}
              onChangeText={setLanguage}
            />

            {/* BOTÓN SIGUIENTE */}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>

            {/* ATRÁS */}
            <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 10 }}>
              <Text style={styles.backLink}>← Atrás</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

