import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Field = ({name, value}) => {
}
const Movie = ({title, genre, releaseYear, staring, duration}) => {

}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        padding: 15,
        marginTop: 10,
        backgroundColor: "#FFD700"
    },
    fieldName: {
        fontWeight: "bold"
    },
    field: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5
    },

})

export default Movie;
