import { LINK_COLOR } from '@/utils/constantsStyle';
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    paragraph: {
        color: "#FFFFFF",
        padding: 5
    },
    paragraphError: {
        color: "#F00",
        padding: 5
    },
    link: {
        color: LINK_COLOR,
        padding: 5
    },
    logo: {
        width: 200,
        height: 200,
        margin: 20
    },
    flexDirectionRow: {
        flexDirection: "row"
    }
})