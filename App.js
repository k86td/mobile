import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Conversation, Message, NewMessage } from './components/Message';
import ButtonBox from './components/ButtonBox';


export default function App() {
  const initialState = [
    {
      text: "hello",
      from: "you",
    },
    {
      text: "Est-ce que tu va mieux qu'hier soir ?",
      from: "Solange"
    },
    {
      text: "Ouais, j'ai pris des π. J'arrive Γ  penser Γ  autre chose.",
      from: "you"
    },
    {
      text: "Veux-tu aller prendre un βοΈ au bar en bas de chez toi ?",
      from: "Solange"
    },
    {
      text: "Je crois que j'ai plus besoin d'aller prendre une πΆββοΈ",
      from: "you"
    },
    {
      text: "hello",
      from: "you",
    },
    {
      text: "Est-ce que tu va mieux qu'hier soir ?",
      from: "Solange"
    },
    {
      text: "Ouais, j'ai pris des π. J'arrive Γ  penser Γ  autre chose.",
      from: "you"
    },
    {
      text: "Veux-tu aller prendre un βοΈ au bar en bas de chez toi ?",
      from: "Solange"
    },
    {
      text: "Je crois que j'ai plus besoin d'aller prendre une πΆββοΈ",
      from: "you"
    },
    {
      text: "hello",
      from: "you",
    },
    {
      text: "Est-ce que tu va mieux qu'hier soir ?",
      from: "Solange"
    },
    {
      text: "Ouais, j'ai pris des π. J'arrive Γ  penser Γ  autre chose.",
      from: "you"
    },
    {
      text: "Veux-tu aller prendre un βοΈ au bar en bas de chez toi ?",
      from: "Solange"
    },
    {
      text: "Je crois que j'ai plus besoin d'aller prendre une πΆββοΈ",
      from: "you"
    }
  ];

  const [messages, setMessages] = useState(initialState);

  return (
    <View style={styles.container}>
      <StatusBar />

      <Conversation
        data={messages}
      />

      <NewMessage>
        <ButtonBox />
      </NewMessage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});
