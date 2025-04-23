import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

export default function WriteArticle ({scrollDirection}:any) {
    return (
        <View style={[styles.content, { opacity: scrollDirection  ? 0 : 1 }]}>
            <FontAwesome size={40} name="pencil" color={'white'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        position: "absolute",
        right: 30,
        bottom: 20,
        backgroundColor: "rebeccapurple",
        width: 60,
        height: 60,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    },
})