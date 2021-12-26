/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useMemo, useState } from 'react';
// import type {Node} from 'react';
import {
  AppState,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Body from './Components/Body';

import Header from './Components/Header';
import Input from './Components/Input';
import AppContext from './Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Controls from './Components/Controls';

const App = () => {

  const [appState, setAppState] = useState({todos: [], show: [], filter: 'all'});
  const value = useMemo(() => ({appState, setAppState}), [appState]);

  useEffect(() => {
      (async() => {
        const todos = await AsyncStorage.getItem('Todos');
        console.log(todos, "appp state")
        if(todos){
          setAppState(JSON.parse(todos));
        }else{
          await AsyncStorage.setItem('Todos', JSON.stringify({todos: [], filter: 'all'}));
        }
    })()
  },[])

  useEffect(() => {

  },[appState.filter])

  return (
    <AppContext.Provider value={value}>
      <SafeAreaView style={styles.backgroundStyle}>
        <ImageBackground blurRadius={2} source={require('./Components/pic1.jpg')} resizeMode='cover' style={styles.image} >
          <Text>
            {/* {JSON.stringify(appState)} */}
          </Text>
          <Header />
          <Body />
          <Input />
          {
            appState.filter === 'completed'?
            <Controls />
            : 
            null
          }
        </ImageBackground>
      </SafeAreaView>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#036A8D',
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default App;
