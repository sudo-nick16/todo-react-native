import React, { useContext } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import AppContext from '../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Controls = () => {
    const {appState, setAppState} = useContext(AppContext);

    const deleteHandler = async () => {
        await AsyncStorage.setItem('Todos', JSON.stringify({appState, todos: appState.todos.filter(todo => !todo.completed)}));
        setAppState(curr => {
            return {...curr, todos: curr.todos.filter(todo => !todo.completed)}
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.deleteBtn} onPress={deleteHandler}>
                Delete All
            </Text>
            <Pressable onPress={deleteHandler}>
                <Image source={require('./bin2.png')} style={styles.dlt}  />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: '10%',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    deleteBtn: {
        fontSize: 12,
        color: '#fff',
        paddingVertical: 5,
        width: 'auto',
        paddingHorizontal: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        // backgroundColor: 'red',
        
    },
    dlt: {
        width: 35,
        height: 35,
    }
})

export default Controls
