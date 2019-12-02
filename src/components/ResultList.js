import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsList = ({title}) => {
  return (
    <View>
      <Text style={styles.headerStyling}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyling: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
