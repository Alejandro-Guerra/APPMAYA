import { StyleSheet, Dimensions } from "react-native";

const isMobile = Dimensions.get("window").width < 900;

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#f8f8ff",
  },

  content: {
    flex: 1,
    paddingHorizontal: isMobile ? 16 : 40,
    paddingTop: 20,
  },

  /* Drawer en móvil */
  menuButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 999,
  },

  drawer: {
    position: "absolute",
    top: 0,
    left: -260,
    width: 260,
    height: "100%",
    backgroundColor: "#ffffff",
    zIndex: 1000,
    paddingTop: 40,
  },

  drawerOpen: {
    left: 0,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  drawerOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 998,
  },

  /* Stats */
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
