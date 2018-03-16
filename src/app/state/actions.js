export function incrementActionCreator(value){
    return{
        type:"INCREMENT",
        payload:{
            value:value
        }

    }
}