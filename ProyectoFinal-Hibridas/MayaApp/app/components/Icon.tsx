import React from "react";
import { Image, ImageStyle } from "react-native";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}


const icons: Record<string, any> = {
  chart: require("../../assets/icons/chart.png"),
  settings: require("../../assets/icons/settings.png"),
  user: require("../../assets/icons/user.png"),
  store: require("../../assets/icons/store.png"),
  dictionary: require("../../assets/icons/dictionary.png"),
  home: require("../../assets/icons/home.png"),
  play: require("../../assets/icons/play.png"),
  lock: require("../../assets/icons/lock.png"),
  check: require("../../assets/icons/check.png"),
  star: require("../../assets/icons/star.png"),
  heart_broken: require("../../assets/icons/heart_broken.png"),
  heart: require("../../assets/icons/heart.png"),
  flame: require("../../assets/icons/flame.png"),
  bell: require("../../assets/icons/bell.png"),
  book: require("../../assets/icons/book.png"),
  logout: require("../../assets/icons/logout.png"),
  ranking: require("../../assets/icons/ranking.png"),   
};

export default function Icon({ name, size = 24, color }: IconProps) {
  const source = icons[name];

  if (!source) {
    console.warn(`Icono no encontrado: "${name}"`);
    return null;
  }

  return (
    <Image
      source={source}
      style={[
        {
          width: size,
          height: size,
          tintColor: color || undefined,
          resizeMode: "contain",
        } as ImageStyle,
      ]}
    />
  );
}



