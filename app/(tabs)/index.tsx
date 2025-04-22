import { ScrollView, Text, StyleSheet, } from 'react-native';
import Article from '../Components/article/article';

export default function Tab() {
  const articles = [
    {
      name: "Soryu",
      username: "soryu",
      text: "Hello world",
      comments: 0,
      likes: 9,
      image: ''
    },
    {
      name: "Screen",
      username: "scree_een",
      text: "Black screen.",
      comments: 2,
      likes: 84,
      image: ''
    },
    {
      name: "Liker",
      username: "like_lover",
      text: "Like plz",
      comments: 98,
      likes: 342,
      image: require("../../assets/images/user/9pLeFkD.jpeg")
    },
    {
      name: "Tester",
      username: "test123",
      text: "test 123",
      comments: 24,
      likes: 192,
      image: require("../../assets/images/user/11.png")
    },
    {
      name: "Tabs",
      username: "HeLo12_2",
      text: "+++++",
      comments: 1,
      likes: 3,
      image: ''
    },
    {
      name: "Бабайка",
      username: "kricha",
      text: "Алалвалві лілвіліл ідівулауц уцкщцалв)))))",
      comments: 564,
      likes: 9212,
      image: require("../../assets/images/user/232.jpg")
    },

  ]
  return (
    <ScrollView style={styles.container}>
      {articles.map((article, i)=> {
        return (
          <Article key={i} content={article}/>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
