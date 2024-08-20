/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen(){
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:20,
        borderRadius:8,
        marginTop:100,
        padding:16,
        backgroundColor: '#4e0329',
        elevation: 8,
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        textAlign: 'center',
    },
});

export default StartGameScreen;