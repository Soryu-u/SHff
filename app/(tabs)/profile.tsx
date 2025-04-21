import { ScrollView, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      <Text>My profile</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
