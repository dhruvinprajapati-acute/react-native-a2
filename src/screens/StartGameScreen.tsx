/* eslint-disable react/react-in-jsx-scope */
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";


function StartGameScreen({onPickedNumber}){
    const [enterNumber, setEnterNumber] = useState('');

    function numberInputHandler(value: string){
        setEnterNumber(value);
    }

    function resetInputHandler(){
        setEnterNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enterNumber);

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 to 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return;
        }

        onPickedNumber(chosenNumber);
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
                value={enterNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex:1
    }
});

export default StartGameScreen;