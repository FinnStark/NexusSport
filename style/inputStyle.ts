import { COLOR_WHITE, FIELD_RADIUS, PADDING_INPUT } from '@/utils/constantsStyle';
import {StyleSheet} from 'react-native';
export const inputStyle = StyleSheet.create({
    logInput: {
        backgroundColor : COLOR_WHITE,
        width: 200,
        height: 40,
        borderRadius: FIELD_RADIUS,
        paddingHorizontal: PADDING_INPUT,
        margin: 5
    }    
})