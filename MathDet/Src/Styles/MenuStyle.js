import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Img: {
        height: 150,
        width: '100%',
        flex: 1,
        resizeMode: 'contain'
    },
    Card:{
        width: '75%',
        flex: 0
    },
    Grid: {
        flex: 1,
        height: '100%',
    },
    Col: {
        justifyContent: 'center'
    },
    Text: {
        fontFamily: 'bree',
        fontSize: 20,
        color: 'violet'
    }
});