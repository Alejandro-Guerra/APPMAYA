import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  icon?: any;
}

export default function FloatingInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  icon,
}: Props) {
  const [focused, setFocused] = useState(false);

  const isActive = focused || value !== "";

  return (
    <View style={styles.wrapper}>
      {/* ICONO */}
      {icon && <View style={styles.icon}>{icon}</View>}

      {/* LABEL flotante */}
      <Text
        style={[
          styles.label,
          isActive && styles.labelActive,
          icon && { left: 38 },
        ]}
      >
        {label}
      </Text>

      {/* INPUT */}
      <TextInput
        style={[
          styles.input,
          icon && { paddingLeft: 38 },
        ]}
        value={value}
        placeholder={!isActive ? label : ""}
        placeholderTextColor="#9CA3AF"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 16,
    position: "relative",
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: "#FFFFFF",
    color: "#1E293B",
  },

  label: {
    position: "absolute",
    top: 12,               
    left: 12,
    fontSize: 14,
    color: "#94A3B8",
    zIndex: 2,
  },

  labelActive: {
    top: -8,               
    fontSize: 11,
    color: "#6B7280",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 4,
  },

  icon: {
    position: "absolute",
    left: 10,
    top: 12,
    zIndex: 3,
  },
});

