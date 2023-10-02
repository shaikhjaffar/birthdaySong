
const initialState = {
    data: {
        firendName:"",
        age:"",
        gender:"",
        mood:"",
        petname:"",
        angry:"",
        funny:"",
        smile:"",
        movie:"",
        sport:""
      }
}

export const addDataReducer = (state=initialState,action) => {
    switch(action.type) {
       case "ADD_DATA" :
           return{
                   ...state,data : {...state.data,[action.payload.fieldName] : action.payload.value},
           }
        default :   
          return state 

    }
}