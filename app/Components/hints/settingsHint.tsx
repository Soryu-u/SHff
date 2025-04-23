import { FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

export default function SettingsHint ({article}:any) {
    return (
        <View style={styles.content}>
            <View style={styles.items}>
                <FontAwesome name="bell-slash-o" size={24} color="black" />
                <Text style={styles.text}>
                    Mute {article.username}
                </Text>
            </View>
            <View style={styles.items}>
                <FontAwesome name="ban" size={24} color="black" />
                <Text style={styles.text}>
                    Block {article.username}
                </Text> 
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "auto",
        padding: 10
    },
    items: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        marginHorizontal: 20
    },
    text: {
        fontSize: 18,
        marginLeft: 20
    }
})