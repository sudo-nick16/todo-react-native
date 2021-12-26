import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Keyboard, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Controls from './Controls';

const Input = () => {
    const [todo, setTodo] = useState('');
    const {appState, setAppState} = useContext(AppContext);

    const addTodo = async () => {
        if(todo.length){
            const data = {content: todo, completed: false};
            AsyncStorage.setItem('Todos', JSON.stringify({todos: [...appState.todos, data], filter: appState.filter}))
            setAppState(curr => {
                return {todos: [...curr.todos, data], filter: curr.filter}
            })
        }
        setTodo("");
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                defaultValue={todo}
                placeholder='Add Todo'
                placeholderTextColor='#fff'
                onChangeText={(text) => setTodo(text)}
                onKeyPress={(e) => {console.log(e)}}
            />
            <Pressable style={styles.addBtnWrapper} onPress={addTodo}>
                <Text style={styles.addBtn} onPress={() => addTodo()}>Add</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        // marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    input: {
        height: 60,
        backgroundColor: '#014256ab',
        borderRadius: 40,
        fontSize: 18,
        paddingHorizontal: 30,
        color: '#fff',
        width: '100%',
    },
    addBtn: {
        position: 'absolute',
        height: '90%',
        width: 'auto',
        backgroundColor: '#01455cb5',
        color: '#fff',
        textAlignVertical: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        borderRadius: 40,
        borderColor: '#094D66',
        borderWidth: 1,
    },
    addBtnWrapper: {
        position: 'absolute',
        right: 0,
        height: '80%',
        width: 'auto',
        minWidth: 80,
        // backgroundColor: 'red',
        right: 5,
        width: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default Input
