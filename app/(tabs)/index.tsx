import { ScrollView, View, StyleSheet, } from 'react-native';
import Article from '../Components/article/article';
import WriteArticle from '../Components/writeArticle/writeArticle';
import { useRef, useState } from 'react';
import { useNavigation } from 'expo-router';

export default function Tab() {
  const articles = [
    {
      name: "Soryu",
      username: "soryu",
      text: "Hello world",
      comments: 0,
      likes: 9,
      image: '',
      time: '9 hours'
    },
    {
      name: "Screen",
      username: "scree_een",
      text: "Black screen.",
      comments: 2,
      likes: 84,
      image: '',
      time: '12 minutes'
    },
    {
      name: "Liker",
      username: "like_lover",
      text: "Like plz",
      comments: 98,
      likes: 342,
      image: require("../../assets/images/user/9pLeFkD.jpeg"),
      time: '1 hour'
    },
    {
      name: "Tester",
      username: "test123",
      text: "test 123",
      comments: 24,
      likes: 192,
      image: require("../../assets/images/user/11.png"),
      time: '1 day'
    },
    {
      name: "Tabs",
      username: "HeLo12_2",
      text: "+++++",
      comments: 1,
      likes: 3,
      image: '',
      time: '1 week'
    },
    {
      name: "Бабайка",
      username: "kricha",
      text: "Алалвалві лілвіліл ідівулауц уцкщцалв)))))",
      comments: 564,
      likes: 9212,
      image: require("../../assets/images/user/232.jpg"),
      time: '4 seconds'
    },

  ]

  const navigation = useNavigation();
  const lastOffsetY = useRef(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const diff = offsetY - lastOffsetY.current;

    if (!hidden && diff > 10) {
      // Прокручено вниз > 100px — ховаємо
      setHidden(true);
      navigation.setOptions({
        // headerShown: false,
        tabBarStyle: { display: 'none' },
      });
    } else if (hidden && diff < 0) {
      // Прокрутка вгору — показуємо
      setHidden(false);
      navigation.setOptions({
        headerShown: true,
        tabBarStyle: { display: 'flex' },
      });
    }

    lastOffsetY.current = offsetY;
  };
  

  return (
    <View>
      <ScrollView style={styles.container}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        {articles.map((article, i)=> {
          return (
            <Article key={i} content={article}/>
          )
        })}
      </ScrollView>
      <WriteArticle scrollDirection={hidden}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
