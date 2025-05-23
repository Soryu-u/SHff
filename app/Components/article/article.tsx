import { getRelativeTime } from '@/app/utils/relativeTime';
import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Article({content, onSettingsPress}:any) {
    let [liked , setLiked] = useState(false);
    let [likes, setLike] = useState(content.likes?content.likes:0)
    let color = liked ? "red" : "black";
    type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;

    let heart: FontAwesomeIconName = liked ? "heart" : "heart-o";
    const press = () => {
        setLiked(!liked);
        liked?setLike(likes-1):setLike(likes+1)
    };
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={{uri: content.userPic}} />
            <View style={{paddingLeft: 20, flex: 1}}>
                <View style={styles.header}>
                  <View style={styles.username}>
                    <Text style={styles.name}>{content.name}</Text>
                    <Text style={{color:"grey", fontSize: 15, paddingLeft: 5}}>@{content.username}</Text>
                    <FontAwesome style={{paddingLeft: 5}} size={5} name="circle" color={"grey"}/>
                    <Text style={{color: "grey", paddingLeft: 5}}>{getRelativeTime(content.time)}</Text>
                  </View>
                  <Feather size={20} name="more-vertical" color={"dark"} onPress={onSettingsPress}/>
                </View>
                <View style={{}}>
                  <Text style={styles.article}>{content.text}</Text>
                  {content.image?<Image style={{maxWidth: "100%", height: 300, borderRadius: 10, marginBottom: 10}} source={{uri: content.image}}/>:<></>}
                </View>
                <View style={styles.footer}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <FontAwesome size={20} name="comment-o" color={"black"}/>
                        <Text style={{paddingLeft: 10}}>{content.comments?content.comments:''}</Text>
                    </View>
                    <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginRight: 10}}  onPress={press}>
                        <FontAwesome size={20} name={heart} color={color}/>
                        <Text style={{paddingLeft: 10}}>{likes}</Text>
                    </TouchableOpacity>
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
    justifyContent: "space-between",
  },
  username: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden"
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
