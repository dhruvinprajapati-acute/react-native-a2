/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";


function StartGameScreen(){
    const [enterNumber, setEnterNumber] = useState('');

    function numberInputHandler(value: string){
        setEnterNumber(value);
    }

    function confirmInputHandler(){

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