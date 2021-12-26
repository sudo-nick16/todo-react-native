import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppContext from '../Context/AppContext';

const Header = () => {
    const {appState, setAppState} = useContext(AppContext);
    const styles = StyleSheet.create({
        container: {
            width: '80%',
            backgroundColor: '#00648588',
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            borderRadius: 40,
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            overflow: 'hidden',
            justifyContent: 'space-evenly'
        },
        text: {
            fontSize: 18,
            fontFamily: 'sans-serif',
            backgroundColor: "red",
            paddingVertical: 18,
            overflow: 'hidden',
        },
        all: {
            fontSize: 18,
            color: '#fff',
            paddingVertical: 18,
            paddingHorizontal: 30,
            borderTopLeftRadius: 35,
            borderBottomLeftRadius: 35,
            backgroundColor: appState.filter === 'all' ? '#03526dbc' : 'transparent',
        },
        active: {
            fontSize: 18,
            color: '#fff',
            paddingVertical: 18,
            paddingHorizontal: 30,
            backgroundColor: appState.filter === 'active' ? '#03536dbc' : 'transparent',
        },
        completed:{
            fontSize: 18,
            color: '#fff',
            paddingVertical: 18,
            paddingHorizontal: 30,
            borderTopRightRadius: 35,
            borderBottomRightRadius: 35,
            backgroundColor: appState.filter === 'completed' ? '#03536dbc' : 'transparent',
        },
    })
    return (
        <View style={styles.container} >
            <Text style={styles.all} onPress={() => setAppState(curr => ({...curr, filter: 'all'}))}>
                All
            </Text>
            <Text style={styles.active} onPress={() => setAppState(curr => ({...curr, filter: 'active'}))}>
                Active
            </Text>
            <Text style={styles.completed} onPress={() => setAppState(curr => ({...curr, filter: 'completed'}))}>
                Completed
            </Text>
        </View>
    )
}


export default Header