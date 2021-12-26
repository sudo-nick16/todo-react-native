import React, { useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AppContext from '../Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoItem = (props) => {
    const {appState, setAppState} = useContext(AppContext  );
    console.log(props, "todo")
    const styles = StyleSheet.create({
        container: {
            marginTop: 20,
            backgroundColor: props.completed? '#00628383' : '#096888cf',
            fontSize: 20,
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 50,
            paddingVertical: 15,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

        },
        circle: {
            borderRadius: 50,
            borderWidth: 2,
            backgroundColor: props.completed ? '#fff' : 'transparent',
            borderColor: props.completed ? '#176E89' : '#187597',
            width: 15,
            height: 15,
            // padding: 18,
            marginLeft: 10

            
        },
        content: {
            marginLeft: 20,
            fontSize: 20,
            color: '#fff',
            color: !props.completed ? '#fff' : '#cae8f1',
            fontStyle: props.completed ? 'italic' : 'normal',
            textDecorationLine: props.completed ? 'line-through' : 'none',
            width: '90%',
            maxWidth: '90%',
            overflow: 'hidden',

        }
    })
    const completedHandler = async (id) => {
        console.log(id, "completes")
        setAppState(curr => ({
            ...curr,
            todos: curr.todos.map((todo, index) => {
                if(index === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }),
        }));
        await AsyncStorage.setItem('Todos', JSON.stringify(appState));
    }
    return (
        <Pressable style={styles.container} onPress={() => completedHandler(props.id)}>
            <Pressable style={styles.circle}></Pressable>
            <Text style={styles.content}>{props.content}</Text>
        </Pressable>
    )
}


export default TodoItem
