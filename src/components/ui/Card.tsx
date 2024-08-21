import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    );
}

const styles = StyleSheet.create({
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:20,
        borderRadius:8,
        marginTop:100,
        padding:16,
        backgroundColor: Colors.primary800,
        elevation: 8,
    },
})

export default Card;