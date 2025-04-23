import { ScrollView, View, StyleSheet, TouchableWithoutFeedback, } from 'react-native';
import Article from '../Components/article/article';
import WriteArticle from '../Components/writeArticle/writeArticle';
import { useRef, useState } from 'react';
import { useNavigation } from 'expo-router';
import SettingsHint from '../Components/hints/settingsHint';
import articles from "../../assets/data.json"

export default function Tab() {
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

  const [showSettings, setShowSettings] = useState(false);
  const [activeArticleId, setActiveArticleId] = useState<any | null>(null);

  const handleOpenSettings = (article: any) => {
    setActiveArticleId(article);
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
    setActiveArticleId(null);
  };
  

  return (
    <View>
      <ScrollView style={styles.container}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        {articles.map((article, i)=> {
          return (
            <Article key={i} content={article}
              onSettingsPress={() => handleOpenSettings(article)}
            />
          )
        })}
      </ScrollView>
      <WriteArticle scrollDirection={hidden}/>

      {showSettings && (
        <TouchableWithoutFeedback onPress={handleCloseSettings}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0,0,0,0.3)',
              justifyContent: 'flex-end',
            }}
          >
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={{ backgroundColor: 'white', padding: 16 }}>
                <SettingsHint article={activeArticleId!} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
