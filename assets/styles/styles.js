import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    appContainer: {
        paddingTop:50,
        paddingHorizontal:16,
        flex:1
    },
    inputContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottom:24,
        borderBottomWidth:1,
        borderBottomColr: 'rgba(200,200,200,1)',
        marginBottom:24
    },
    textInput: {
        borderWidth:1,
        borderColor:'rgba(200,200,200,1)',
        padding:10,
        width:'90%'
    },
    goalsContainer: {
        flex:4,
    },
    
    buttonOuter: {
        backgroundColor:'rgba(50,50,50,1)',
        borderRadius:6,
        
    },
    buttonMain: {
        color:'white',
        fontSize:15,
        padding:8,
        paddingHorizontal:12
    },
    goalsInputWrapper: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    goalsInputWrapperButtons: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    goalsPressable: {
        marginRight:20
    }
})

export { styles }