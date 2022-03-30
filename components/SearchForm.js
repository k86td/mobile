import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const movieGenres = [
    "Thriller", "Anticipation", "Science-fiction",
    "Drama", "Lovestory", "Mystery",
    "Prison", "Crime", "Psychological",
    "Gangster", "Bio", "Sports",
    "Dystopie", "Horror", "Heist",
    "Comedy", "Neo-western", "Musical",
    "Christmas", "Fantasy", "Family",
    "Adventure", "Live-action", "Epic",
    "War", "Black", "Cyberpunk"
];

const FindGenreId = (genreName, array) => array.map(e => e.toLowerCase()).indexOf(genreName)

const ReactivePicker = ({ pickerValues, defaultGenre = Thriller }) => {
    let res = [];
    let id = 0;

    let [selectedValue, setSelectedValue] = useState(pickerValues[FindGenreId(defaultGenre, movieGenres)]);

    pickerValues.forEach(el => {
        res.push(<Picker.Item label={el} value={el} key={id} />);
        ++id;
    });

    return <Picker
        selectedValue={selectedValue}
        onValueChange={value => setSelectedValue(value)}
        style={styles.picker}
    >
        {res}
    </Picker>;
}

const FlexContainer = ({ children }) => <View style={styles.flexContainer}>{children}</View>;
const ButtonContainer = ({ children }) => <View style={styles.buttonContainer}>{children}</View>


const SearchForm = ({searchState}) => {
    return <View>
        <FlexContainer>
            <Text>Advanced Search</Text>
            <Button title='BACK TO RESULTS' />
        </FlexContainer>

        <TextInput value={searchState.title} onChange={searchState.onEdit("title")} id="title" placeholder='Titre' style={styles.textInput} />
        <TextInput value={searchState.staring} onChange={searchState.onEdit("staring")} id="staring" placeholder='Staring' style={styles.textInput} />
        <TextInput value={searchState.director} onChange={searchState.onEdit("director")} id="director" placeholder='Director' style={styles.textInput} />

        <FlexContainer style={styles.flexContainer}>
            <Text>Genre</Text>
            <ReactivePicker pickerValues={movieGenres} />
        </FlexContainer>

        <TextInput value={searchState.releaseDate} onChange={searchState.onEdit("releaseDate")} id="releaseDate" placeholder='Release Date' style={styles.textInput} />
        <TextInput value={searchState.duration} onChange={searchState.onEdit("duration")} id="duration" placeholder='Duration' style={styles.textInput} />

        <ButtonContainer>
            <Button onPress={searchState.onCancel} title='CANCEL' />
            <Button onPress={searchState.onSearch} title='SEARCH' />
        </ButtonContainer>
    </View>
}

export default SearchForm;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F3F3F3',
        // flex: 1,
        fontSize: 18,
        height: 45,
        padding: 10,
        marginBottom: 5,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        alignItems: 'center',
    },
    picker: {
        height: 50,
        width: 200,
        borderColor: 'black',
        borderWidth: 2
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
    },
    buttonContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '45%'
    },
});
