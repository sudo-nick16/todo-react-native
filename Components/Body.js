import React, { useContext, useEffect, useState } from 'react'
import { Animated, Keyboard, ScrollView, StyleSheet, View } from 'react-native'
import AppContext from '../Context/AppContext';
import TodoItem from './TodoItem';

const Body = () => {
    const {appState} = useContext(AppContext);
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    const styles = StyleSheet.create({
        container: {
            height: keyboardStatus ? '58%' : '72%',
            paddingVertical: 20,
            // maxHeight: '72%',
            width: '100%',
            // backgroundColor: 'blue',
            marginLeft: 'auto',
            marginRight: 'auto',
    
        },
    })

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
          };
    }, [])

    return (
        <View style={styles.container}>
            <Animated.ScrollView style={{}}>
                {
                    appState.filter === 'all' ?
                        appState.todos.map((todo, index) => <TodoItem key={index} id={index} content={todo.content} completed={todo.completed} />)
                        :
                        appState.filter === 'active' ? 
                            appState.todos.map((todo, index) => todo.completed? null : <TodoItem key={index} id={index} content={todo.content} completed={todo.completed} />)
                            :
                            appState.todos.map((todo, index) => !todo.completed? null : <TodoItem key={index} id={index} content={todo.content} completed={todo.completed} />)
                }
            </Animated.ScrollView>
        </View>
    )
}

export default React.memo(Body)