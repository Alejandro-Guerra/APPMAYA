import { View, Text, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import styles from "./styles";

export default function Splash() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MayaApp</Text>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
}
