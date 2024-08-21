import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen(){
    return(
        <View style={styles.screen}>
            <Title>Oppnent Guess</Title>
            <View>
                <Text>Heigher Or Lower</Text>
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