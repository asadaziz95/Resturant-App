import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './../../components/SearchBar.js';
import useResults from '../../hooks/useResults.js';
import ResultsList from '../../components/ResultsList.js';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = price => {
    //price === '$' ||price === '$$'||price === '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ScrollView>
        <ResultsList
          results={filterResultByPrice('$')}
          title={'Cost Effective'}
        />
        <ResultsList
          results={filterResultByPrice('$$')}
          title={'Bit Pricier'}
        />
        <ResultsList
          results={filterResultByPrice('$$$')}
          title={'Big Spender'}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
