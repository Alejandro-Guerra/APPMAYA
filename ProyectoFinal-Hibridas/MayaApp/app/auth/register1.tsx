import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import styles from "./register.styles";
import { saveItem, getItem } from "../utils/storage";

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

export default function Register1() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // CARGA INFORMACIÓN TEMPORAL SI EL USUARIO VOLVIÓ ATRÁS
  useEffect(() => {
    (async () => {
      const stored = await getItem("tempUser");
      if (stored) {
        try {
          const parsed: TempUser = JSON.parse(stored);
          if (parsed.name) setName(parsed.name);
          if (parsed.lastname) setLastname(parsed.lastname);
          if (parsed.email) setEmail(parsed.email);
          if (parsed.password) setPassword(parsed.password);
        } catch (e) {
          console.log("Error parseando tempUser:", e);
        }
      }
    })();
  }, []);

  const handleNext = async () => {
    if (!name.trim() || !lastname.trim() || !email.trim()) {
      Alert.alert("Campos incompletos", "Nombre, apellido y correo son obligatorios.");
      return;
    }

    if (!password || password.length < 6) {
      Alert.alert("Contraseña inválida", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPass) {
      Alert.alert("Contraseña", "Las contraseñas no coinciden.");
      return;
    }

    const existing = await getItem("tempUser");
    let draft: TempUser;

    if (existing) {
      try {
        draft = JSON.parse(existing);
      } catch {
        draft = {
          id: Date.now(),
          name: "",
          lastname: "",
          email: "",
          password: "",
        };
      }
    } else {
      draft = {
        id: Date.now(),
        name: "",
        lastname: "",
        email: "",
        password: "",
        level: "Principiante",
        streak: 0,
        points: 0,
        lessonsCompleted: 0,
        accuracy: 0,
        avatar: "avatar1",
      };
    }

    draft = {
      ...draft,
      name: name.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password,
    };

    await saveItem("tempUser", JSON.stringify(draft));

    router.push("/auth/register2");
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
            <Text style={styles.title}>Crear cuenta</Text>
            <Text style={styles.subtitle}>Paso 1 de 3 - Datos de cuenta</Text>

            <TextInput
              placeholder="Nombre"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />

            <TextInput
              placeholder="Apellido"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              value={lastname}
              onChangeText={setLastname}
            />

            <TextInput
              placeholder="Correo electrónico"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              placeholder="Confirmar contraseña"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              secureTextEntry
              value={confirmPass}
              onChangeText={setConfirmPass}
            />

            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              ¿Ya tienes cuenta?{" "}
              <Link style={styles.footerLink} href="/auth/login">
                Inicia sesión
              </Link>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}


