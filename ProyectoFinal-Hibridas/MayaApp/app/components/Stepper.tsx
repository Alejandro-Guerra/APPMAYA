import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StepperProps {
  step: number; 
}

export default function Stepper({ step }: StepperProps) {
  const steps = [
    { id: 1, label: "Cuenta" },
    { id: 2, label: "Información" },
    { id: 3, label: "Preferencias" }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {steps.map((s, index) => {
          const isActive = step === s.id;
          const isCompleted = step > s.id;

          return (
            <View key={s.id} style={styles.stepContainer}>
              
              {/* CÍRCULO */}
              <View
                style={[
                  styles.circle,
                  isActive && styles.circleActive,
                  isCompleted && styles.circleCompleted
                ]}
              >
                <Text
                  style={[
                    styles.circleText,
                    (isActive || isCompleted) && styles.circleTextActive
                  ]}
                >
                  {s.id}
                </Text>
              </View>

              {/* LABEL */}
              <Text
                style={[
                  styles.label,
                  isActive && styles.labelActive,
                  isCompleted && styles.labelCompleted
                ]}
              >
                {s.label}
              </Text>

              {/* LÍNEA ENTRE PASOS */}
              {index < steps.length - 1 && (
                <View
                  style={[
                    styles.line,
                    step > s.id ? styles.lineActive : null
                  ]}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  circleActive: {
    backgroundColor: "#7C3AED",
  },
  circleCompleted: {
    backgroundColor: "#6366F1",
  },
  circleText: {
    color: "#475569",
    fontWeight: "600",
  },
  circleTextActive: {
    color: "white",
  },
  label: {
    fontSize: 12,
    color: "#94A3B8",
    marginLeft: 4,
    marginRight: 10,
  },
  labelActive: {
    color: "#7C3AED",
    fontWeight: "600",
  },
  labelCompleted: {
    color: "#6366F1",
  },
  line: {
    width: 35,
    height: 2,
    backgroundColor: "#E2E8F0",
    marginHorizontal: 5,
  },
  lineActive: {
    backgroundColor: "#6366F1",
  },
});

