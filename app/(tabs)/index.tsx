import { ScrollView, Text, StyleSheet, } from 'react-native';
import Article from '../Components/article/article';

export default function Tab() {
  const articles = [
    {
      name: "Soryu",
      text: "Hello world",
      comments: 0,
      likes: 9
    },
    {
      name: "Screen",
      text: "Black screen.",
      comments: 2,
      likes: 84
    },
    {
      name: "Liker",
      text: "Like plz",
      comments: 98,
      likes: 342
    },
    {
      name: "Tester",
      text: "test 123",
      comments: 24,
      likes: 192
    },
    {
      name: "Tabs",
      text: "+++++",
      comments: 1,
      likes: 3
    },
    {
      name: "Бабайка",
      text: "Алалвалві лілвіліл ідівулауц уцкщцалв)))))",
      comments: 564,
      likes: 9212
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
