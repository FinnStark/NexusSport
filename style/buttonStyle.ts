import {StyleSheet} from 'react-native';
export const buttonStyle = StyleSheet.create({
    signInButton: {
        backgroundColor : "#007EA7",
        width: 200,
        height: 40,
        borderRadius: 5,
        margin: 5,
        justifyContent: "center",
        alignItems: 'center', // Centre horizontalement
    },
    signInButtonText: {
        color : "#FFF",
        fontWeight: 'bold', // Poids du texte
        fontSize: 20, // Taille du texte
    }
})