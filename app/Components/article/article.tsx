import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

export default function Article({content}:any) {
    let [liked , setLiked] = useState(false);
    let [likes, setLike] = useState(content.likes?content.likes:0)
    let color = liked?"red":"black";
    const press = () => {
        setLiked(!liked);
        liked?setLike(likes-1):setLike(likes+1)
    };
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../../assets/images/profilePic.jpeg')} />
            <View style={{paddingLeft: 20}}>
                <View style={styles.header}>
                    <Text style={styles.name}>{content.name}</Text>
                </View>
                <Text style={styles.article}>{content.text}</Text>
                <View style={styles.footer}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <FontAwesome size={28} name="comments" color={"black"}/>
                        <Text style={{paddingLeft: 10}}>{content.comments?content.comments:''}</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <FontAwesome size={28} name="heart" color={color} onPress={press}/>
                        <Text style={{paddingLeft: 10}}>{likes}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
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
    fontSize: 24,
  },
  article:{
    fontSize: 18,
    paddingVertical: 10,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
});
