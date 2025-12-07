import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <View style={styles.sidebarContainer}>
      {/* división superior mínima */}
      <View style={styles.topDivider} />

      {/* Avatar y bienvenida */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/icons/avatar1.png")}
          style={styles.avatar}
        />
        <Text style={styles.welcome}>Bienvenido</Text>
        <Text style={styles.username}>Usuario Maya</Text>
      </View>

      {/* Menú */}
      <ScrollView style={{ flex: 1 }}>
        <MenuItem
          label="Aprender"
          icon={require("../../assets/icons/book.png")}
          onPress={() => router.push("/home")}
        />
        <MenuItem
          label="Perfil"
          icon={require("../../assets/icons/user.png")}
          onPress={() => router.push("/profile")}
        />
        <MenuItem
          label="Diccionario"
          icon={require("../../assets/icons/dictionary.png")}
          onPress={() => router.push("/dictionary")}
        />
        <MenuItem
          label="Ranking"
          icon={require("../../assets/icons/ranking.png")}
          onPress={() => router.push("/ranking")}
        />
        <MenuItem
          label="Notificaciones"
          icon={require("../../assets/icons/bell.png")}
          onPress={() => router.push("/notifications")}
        />
        <MenuItem
          label="Tienda"
          icon={require("../../assets/icons/store.png")}
          onPress={() => router.push("/store")}
        />
        <MenuItem
          label="Configuración"
          icon={require("../../assets/icons/settings.png")}
          onPress={() => router.push("/settings")}
        />
      </ScrollView>

      {/* Cerrar sesión */}
      <TouchableOpacity style={styles.logoutContainer}>
        <Image
          source={require("../../assets/icons/logout.png")}
          style={styles.logoutIcon}
        />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

/* --- COMPONENTE MENU ITEM --- */
function MenuItem({ label, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Image source={icon} style={styles.menuIcon} />
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );
}

/* --- ESTILOS --- */
const styles = StyleSheet.create({
  sidebarContainer: {
    width: 250,
    backgroundColor: "#FFFFFF", // FONDO BLANCO
    borderRightWidth: 1,
    borderRightColor: "#E5E5E5",
  },

  topDivider: {
    height: 10,
    backgroundColor: "#F5F7FA", // línea/división suave
    width: "100%",
  },

  header: {
    alignItems: "center",
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  avatar: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
  },

  welcome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  username: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  menuIcon: {
    width: 26,
    height: 26,
    marginRight: 12,
    resizeMode: "contain",
  },

  menuText: {
    fontSize: 16,
    color: "#222",
  },

  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },

  logoutIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
    tintColor: "#FF4F4F",
  },

  logoutText: {
    color: "#FF4F4F",
    fontSize: 16,
    fontWeight: "bold",
  },
});
