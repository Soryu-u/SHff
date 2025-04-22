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
            <View style={{paddingLeft: 20, flex: 1}}>
                <View style={styles.header}>
                    <Text style={styles.name}>{content.name}</Text>
                    <Text style={{color:"grey", fontSize: 15, paddingLeft: 5}}>@{content.username}</Text>
                </View>
                <View style={{}}>
                  <Text style={styles.article}>{content.text}</Text>
                  {content.image?<Image style={{maxWidth: "100%", height: 300, borderRadius: 10, marginBottom: 10}} source={content.image}/>:<></>}
                </View>
                <View style={styles.footer}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <FontAwesome size={20} name="comments" color={"black"}/>
                        <Text style={{paddingLeft: 10}}>{content.comments?content.comments:''}</Text>
                    </View>
                    <Text style={{display: "flex", flexDirection: "row", alignItems: "center",}}  onPress={press}>
                        <FontAwesome size={20} name="heart" color={color}/>
                        <Text style={{paddingLeft: 10}}>{likes}</Text>
                    </Text>
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
    borderTopColor: "darkgrey",
    borderTopWidth: 1,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 15,
  },
  article:{
    fontSize: 13,
    paddingVertical: 10,
    borderRadius: 10,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
