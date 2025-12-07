import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  card: {
    width: "88%",
    maxWidth: 380,      // 👈 MUCHO MÁS PEQUEÑO
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 25,
    paddingHorizontal: 22,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 4,
  },

  appTitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 4,
  },

  subtitleMain: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 20,
  },

  rememberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  rememberText: {
    fontSize: 13,
    color: "#475569",
  },

  forgotText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6D28D9",
  },

  loginButton: {
    width: "100%",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  loginButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E8F0",
  },

  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#94A3B8",
  },

  socialRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  socialButtonSmall: {
    width: "48%",
    height: 45,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  socialIconSmall: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  socialTextSmall: {
    fontSize: 14,
    fontWeight: "500",
    color: "#334155",
  },

  registerText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 13,
    color: "#475569",
  },

  registerLink: {
    color: "#6D28D9",
    fontWeight: "600",
  },
});


