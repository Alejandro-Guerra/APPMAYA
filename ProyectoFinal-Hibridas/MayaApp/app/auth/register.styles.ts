import { StyleSheet } from "react-native";

export default StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },

  card: {
    width: 480,
    maxWidth: "95%",
    backgroundColor: "white",
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 24,
  },

  input: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: "#0F172A",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 14,
  },

  button: {
    width: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

  footerText: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 16,
  },

  footerLink: {
    color: "#6366F1",
    fontWeight: "600",
  },

  backLink: {
    fontSize: 14,
    color: "#6366F1",
    fontWeight: "600",
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
});
