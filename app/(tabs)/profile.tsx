import { ScrollView, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <ScrollView style={styles.container}>
      <Text>Profile</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
