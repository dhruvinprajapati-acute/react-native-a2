import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return(
        <View style={style.rootContiner}>
            <Title>Game Over</Title>
            <View style={style.imageContainer}>
                <Image style={style.image} source={require('../../assets/images/success.png')} />
            </View>
            <Text style={style.summaryText}>
                Your Phone needed  
                <Text style={style.highlight}>{roundsNumber}</Text> 
                rounds to gusse the number  
                <Text style={style.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New game</PrimaryButton>
        </View>
    )
}

const style = StyleSheet.create({
    rootContiner:{
        padding:24,
        justifyContent:'center',
        alignItems: 'center'
    },
    imageContainer:{
        borderRadius: 130,
        width:260,
        height:260,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin:36,
    },
    image:{
        width:'100%',
        height: '100%'
    },
    summaryText:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom:24,
    },
    highlight: {
        color:Colors.primary500
    }
});

export default GameOverScreen;