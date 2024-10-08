/* eslint-disable react/react-in-jsx-scope */
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContaoner";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const guessRoundsListLength = guessRounds.length;

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver(guessRoundsListLength);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundry = 1;
        maxBoundry =100;
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
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    return(
        <View style={styles.screen}>
            <Title>Oppnent Guess</Title>
            <NumberContainer>{ currentGuess }</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Heigher Or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds} 
                    keyExtractor={(item) => item} 
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding: 24,
    },
    instructionText:{
        marginBottom: 12,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex:1
    },
    listContainer: {
        // padding: 16,
    }
});

export default GameScreen;