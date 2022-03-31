import { StyleSheet, View, Button } from 'react-native';

const ButtonBox = () => <View style={styles.buttonBox}>
    <Button
        title='Annuler'
        color='gray' />
    <Button
        title='Envoyer'
        color='#2199de' />
</View>

export default ButtonBox;

const styles = StyleSheet.create({
    buttonBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',

        padding: 5,
        margin: 5,
    },
});