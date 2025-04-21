import { ScrollView, Text, StyleSheet, } from 'react-native';
import Article from '../Components/article/article';

export default function Tab() {
  const arr = [0,1,2,3,4,5,6,7]
  return (
    <ScrollView style={styles.container}>
      <Article/>
      {arr.map((key)=> {
        return (
          <Article key={key}/>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
