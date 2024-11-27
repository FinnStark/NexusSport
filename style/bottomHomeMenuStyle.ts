import { BG_COLOR } from '@/utils/constantsStyle';
import {StyleSheet} from 'react-native';
export const bottomHomeMenuStyle = StyleSheet.create({
    bottomHomeMenu: {
        backgroundColor : BG_COLOR,
        width: "100%",
        height: 50, 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    }})
