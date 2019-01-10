import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    Modal: {
        width: '80%',
        height: '60%',
    },
    ModalOp: {
        width: '95%',
        height: '70%',
    },
    Result: {
        width: '95%',
        height: Dimensions.get('window').height - 5,
    },
    Text: {
        borderWidth: 1,
        borderColor: 'violet',
        borderRadius: 1,
        fontFamily: 'Gloria',
        textAlign: 'center'
    }
})
