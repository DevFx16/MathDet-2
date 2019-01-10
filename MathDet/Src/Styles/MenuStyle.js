import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Img: {
        height: 180,
        width: '100%',
        flex: 1,
        resizeMode: 'contain'
    },
    Card:{
        width: '75%',
        flex: 0
    },
    CardCol:{
        width: '100%',
        flex: 0
    },
    Grid: {
        flex: 1,
        height: '100%',
    },
    Col: {
        justifyContent: 'center'
    },
    Flex:{
      justifyContent: 'flex-start'  
    },
    Alto: {
        justifyContent: 'space-between'
    },
    Input: {
        height: '80%',
        width: '80%'
    },
    Text: {
        fontFamily: 'Gloria',
        fontSize: 20,
        color: 'violet'
    }
});