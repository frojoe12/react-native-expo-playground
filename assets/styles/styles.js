import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    appContainer: {
        paddingTop:50,
        paddingHorizontal:16,
        flex:1,
        
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
    },
    iconContainer: {
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    icon: {
        width:'70%',
        height:'70%'
    },
    titleContainer: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:3,
        marginBotom:3
    },
    headerOne: {
        fontFamily:'roboto-slab-regular',
        fontSize:30,

    },
    listContainer: {
    },
    buttonNewGoalContainer: {
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    buttonNewGoalView: {
        backgroundColor: 'green',
        borderRadius:10,
        width:'20%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    buttonNewGoal: {
        padding:12,
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        textAlign:'center',
        fontFamily:'roboto-slab-regular',
        fontSize:20,
    }
})

export { styles }