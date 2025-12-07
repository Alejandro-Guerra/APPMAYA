import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import FloatingInput from "../components/FloatingInput";
import {
  rememberEmail,
  loadRememberedEmail,
  clearRememberedEmail
} from "../utils/storage";

import styles from "./login.styles";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  // Cargar email recordado al abrir
  useEffect(() => {
    (async () => {
      const saved = await loadRememberedEmail();
      if (saved) {
        setEmail(saved);
        setRemember(true);
      }
    })();
  }, []);

  async function handleLogin() {
    if (remember) {
      await rememberEmail(email);
    } else {
      await clearRememberedEmail();
    }

    router.push("/home");
  }

  return (
    <LinearGradient
      colors={["#7C3AED", "#6366F1", "#60A5FA"]}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.card}>

          {/* TÍTULOS SUPERIORES */}
          <Text style={styles.appTitle}>MayaApp</Text>
          <Text style={styles.subtitleMain}>
            Aprende el idioma de una gran civilización
          </Text>

          {/* INPUTS */}
          <FloatingInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            icon={
              <Image
                source={require("../../assets/icons/email.png")}
                style={{ width: 20, height: 20, tintColor: "#94A3B8" }}
              />
            }
            keyboardType="email-address"
          />

          <FloatingInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            icon={
              <Image
                source={require("../../assets/icons/lock.png")}
                style={{ width: 20, height: 20, tintColor: "#94A3B8" }}
              />
            }
          />

          
          <View style={styles.rememberRow}>
            <TouchableOpacity
              onPress={() => setRemember(!remember)}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  borderWidth: 2,
                  borderColor: remember ? "#7C3AED" : "#CBD5E1",
                  backgroundColor: remember ? "#7C3AED" : "white",
                  marginRight: 8,
                }}
              />
              <Text style={styles.rememberText}>Recordarme</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>

          {/* BOTÓN LOGIN */}
          <LinearGradient
            colors={["#7C3AED", "#6366F1"]}
            style={styles.loginButton}
          >
            <TouchableOpacity
              style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* DIVISOR */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>o</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButtonSmall}>
              <Image source={require("../../assets/google.png")} style={styles.socialIconSmall} />
              <Text style={styles.socialTextSmall}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButtonSmall}>
              <Image source={require("../../assets/facebook.png")} style={styles.socialIconSmall} />
              <Text style={styles.socialTextSmall}>Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* LINK REGISTRO */}
          <Text style={styles.registerText}>
            ¿No tienes cuenta?{" "}
            <Text
              style={styles.registerLink}
              onPress={() => router.push("/auth/register1")}
            >
              Regístrate aquí
            </Text>
          </Text>

        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}