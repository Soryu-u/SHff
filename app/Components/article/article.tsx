import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, StyleSheet, Image } from "react-native";

export default function Article() {
    let liked = true;
    let color = liked?"red":"black";
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../../../assets/images/profilePic.jpeg')} />
                <Text style={styles.name}>Soryu</Text>
            </View>
            <Text style={styles.article}>Article</Text>
            <View style={styles.footer}>
                <FontAwesome size={28} name="comments" color={"black"} />
                <FontAwesome size={28} name="heart" color={color} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'center',
    padding: 20,
    borderTopColor: "black",
    borderTopWidth: 1,
    
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    paddingLeft: 20,
  },
  article:{
    fontSize: 18,
    paddingTop: 10,
    paddingBottom:10,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
});
