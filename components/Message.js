
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function* id() {
    let index = 0;

    while (true)
        yield index++;
}

const idGenerator = id();

export const Conversation = ({ data }) => {
    const renderMessage = ({ item }) => <Message
        from={item.from}
        text={item.text}
    />

    return <View style={styles.conversation}>
        <FlatList
            data={data}
            renderItem={renderMessage}
            keyExtractor={_ => idGenerator.next().value}
        />
    </View>
}

export const Message = ({ from, text, id }) => {
    let msgStyle = from == "you" ? styles.fromMe : styles.fromOther;

    return <View>
        <Text key={id} style={[styles.message, msgStyle]}>
            {text}
        </Text>
    </View>
}

export const NewMessage = ({ children }) => <View style={styles.newMessage}>
    <TextInput
        style={styles.newMessageTextInput}
        placeholder='Saisisez votre message...'
        placeholderTextColor='#6e7276' />
    {children}
</View>


const styles = StyleSheet.create({
    conversation: {
        flex: 5,
        padding: 15,
        width: '100%',
    },

    newMessage: {
        justifyContent: 'flex-end',
        flexDirection: 'column',

        flex: 1,

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

    message: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontWeight: 'bold',
    },

    fromMe: {
        backgroundColor: '#2199de',
        alignSelf: 'flex-end',

        color: 'white',
    },
    fromOther: {
        backgroundColor: '#f2f3f3',
        color: '#6e7276',

        alignSelf: 'flex-start',
    },
});