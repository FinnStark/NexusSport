import { BG_BUTTON_COLOR, BUTTON_RADIUS } from '@/utils/constantsStyle';
import {StyleSheet} from 'react-native';
export const buttonStyle = StyleSheet.create({
    signInButton: {
        backgroundColor : BG_BUTTON_COLOR,
        width: 200,
        height: 40,
        borderRadius: BUTTON_RADIUS,
        margin: 5,
        marginTop: 15,
        justifyContent: "center",
        alignItems: 'center', // Centre horizontalement
    },
    signInButtonText: {
        color : "#FFF",
        fontWeight: 'bold', // Poids du texte
        fontSize: 20, // Taille du texte
    }
})