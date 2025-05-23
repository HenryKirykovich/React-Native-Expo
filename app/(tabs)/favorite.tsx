// Shows only cats marked as favorites
// Reuses your CatCard component

// app/(tabs)/favorites.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { CatContext } from '../../components/context/CatContext';
import CatCard from '../../components/CatCard';

export default function FavoritesScreen() {
  const { cats, favorites, setSelectedCat } = useContext(CatContext);

  // Filter cats to show only favorites
  const favoriteCats = cats.filter((cat) => favorites.includes(cat.id));

  return (
    <ImageBackground
      source={require('../../assets/images/Cat_images/Splash_cat.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Favorite Cats</Text>
        {favoriteCats.length === 0 ? (
          <Text style={styles.empty}>No favorites yet. ❤️ Tap hearts on the home page!</Text>
        ) : (
          <FlatList
            data={favoriteCats}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CatCard cat={item} onPress={() => setSelectedCat(item)} />}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  empty: {
    color: '#444',
    fontSize: 16,
    marginTop: 40,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    flex: 1,
    padding: 20,
  },
});
