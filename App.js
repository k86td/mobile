import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const ButtonBox = () => <View style={styles.buttonBox}>
  <Button
    title='Annuler'
    color='gray' />
  <Button
    title='Envoyer'
    color='#2199de' />
</View>

const NewMessage = ({ children }) => <View style={styles.newMessage}>
  <TextInput
    style={styles.newMessageTextInput}
    placeholder='Saisisez votre message...'
    placeholderTextColor='#6e7276' />
  {children}
</View>

const Message = ({ from, text, id }) => {
  let msgStyle = from == "you" ? styles.fromMe : styles.fromOther;

  return <View style={styles.message}>
    <Text key={id} style={[styles.textMessage, msgStyle]}>
      {text}
    </Text>
  </View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />

      <View>
        <Message
          from='you'
          text='Random message'
          id='12345'
        />
      </View>

      <NewMessage>
        <ButtonBox />
      </NewMessage>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },

  textMessage: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },

  fromMe: {
    backgroundColor: '#2199de',
    color: 'white',
  },
  fromOther: {},

  newMessage: {
    width: '100%',

    padding: 5,
    borderRadius: 4,

    borderColor: '#2199de',
    borderTopWidth: 1,
  },

  newMessageTextInput: {
    color: '#6e7276',
    backgroundColor: '#f2f3f3',

    borderRadius: 4,
    padding: 5,
    margin: 5,
  },

  buttonBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',

    padding: 5,
    margin: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 20,
  },
});
