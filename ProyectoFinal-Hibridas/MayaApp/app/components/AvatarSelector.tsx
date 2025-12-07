import { View, TouchableOpacity, Image } from "react-native";
import styles from "../auth/register.styles";

const avatars = [
    require("../../assets/icons/avatar1.png"),
    require("../../assets/icons/avatar2.png"),
    require("../../assets/icons/avatar3.png"),
    require("../../assets/icons/avatar4.png"),
    require("../../assets/icons/avatar5.png"),
    require("../../assets/icons/avatar6.png"),
];

export default function AvatarSelector({ selected, onSelect }) {
    return (
        <View style={styles.avatarRow}>
            {avatars.map((img, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.avatarWrapper,
                        selected === index && styles.avatarSelected,
                    ]}
                    onPress={() => onSelect(index)}
                >
                    <Image source={img} style={styles.avatarImage} />
                </TouchableOpacity>
            ))}
        </View>
    );
}
