import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import Sidebar from "./Sidebar";

import HeaderCard from "./components/HeaderCard";
import StatsCard from "./components/StatsCard";
import ProgressCard from "./components/ProgressCard";
import UnitCard from "./components/UnitCard";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = Dimensions.get("window").width < 900;

  return (
    <View style={styles.container}>
      {/* SIDEBAR */}
      {isMobile ? (
        <>
          {/* Botón del Drawer */}
          <TouchableOpacity style={styles.menuButton} onPress={() => setDrawerOpen(true)}>
            <MaterialCommunityIcons name="menu" size={30} color="#fff" />
          </TouchableOpacity>

          {/* Drawer Overlay */}
          {drawerOpen && (
            <TouchableOpacity style={styles.drawerOverlay} onPress={() => setDrawerOpen(false)} />
          )}

          {/* Drawer */}
          <View style={[styles.drawer, drawerOpen && styles.drawerOpen]}>
            <Sidebar onNavigate={() => setDrawerOpen(false)} />
          </View>
        </>
      ) : (
        <Sidebar />
      )}

      {/* CONTENIDO */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        <HeaderCard />

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatsCard icon="fire" label="Racha" value="7 días" />
          <StatsCard icon="heart" label="Vidas" value="5" />
          <StatsCard icon="star" label="Puntos" value="235" />
        </View>

        {/* Progreso General */}
        <ProgressCard percentage={42} />

        {/* Unidad 1 */}
        <UnitCard
          title="UNIDAD 1"
          subtitle="Saludos Básicos"
          percentage={75}
          lessons={[
            { title: "Saludos I", icon: "hand-wave" },
            { title: "Saludos II", icon: "handshake" },
          ]}
        />

        {/* Unidad 2 */}
        <UnitCard
          title="UNIDAD 2"
          subtitle="Animales"
          percentage={30}
          lessons={[
            { title: "Animales I", icon: "paw" },
            { title: "Animales II", icon: "dog" },
          ]}
        />

      </ScrollView>
    </View>
  );
}

