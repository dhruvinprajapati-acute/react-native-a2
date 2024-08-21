/* eslint-disable react/react-in-jsx-scope */
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContaoner";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundry = 1;
let maxBoundry = 99;

function GameScreen({userNumber}){
    const initialGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber){
            
        }
    }, []);

    function nextGuessHandler(direction){ // direction => 'lower', 'greater'
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert(
                "don't lie.!",
                'you know this is wrong...!!!',
                [{text:'sorry', style: 'cancel'}]
            );
            return;
        }
        if(direction === 'lower'){
            maxBoundry = currentGuess;
        } else {
            minBoundry = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return(
        <View style={styles.screen}>
            <Title>Oppnent Guess</Title>
            <NumberContainer>{ currentGuess }</NumberContainer>
            <View>
                <Text>Heigher Or Lower</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding: 24,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    }
});

export default GameScreen;