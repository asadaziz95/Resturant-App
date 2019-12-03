import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import yelp from '../api/yelp.js';

const ResultShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  console.log(result);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{result.name}</Text>
        
        <Text>{`Contact Number:${result.display_phone}`}</Text>
        <Text>{`City:${result.location.city}`}</Text>
      <Text>{`Address:${result.location.address1}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 430,
    borderRadius: 2,
  },
  container: {
    alignItems: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 22,
    color: '#05a5d1',
    fontWeight: 'bold',
  },
});

export default ResultShowScreen;
