import { StyleSheet } from 'react-native'
import { COLORS } from './colors'
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
        backgroundColor:'rgba(0,0,0,.1)'
    },
    textInput: {
        borderWidth:1,
        borderColor:'rgba(200,200,200,1)',
        padding:10,
        width:'90%',
        backgroundColor:'white'
    },
    goalsContainer: {
        flex:5,
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
        flex:1,
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
        flex:4,
        marginBottom:10
    },
    buttonNewGoalContainer: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    buttonNewGoalView: {
        backgroundColor: COLORS.secondary,
        borderRadius:10,
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:7
    },
    buttonNewGoal: {
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        textAlign:'center',
        fontFamily:'roboto-slab-regular',
        fontSize:30,
    }
})

export { styles }