

const initialState = {
        destination: null,       
        userData: null,
        otpsate:null,
        accessToken:null,
        loader:true,
        orderinitate:null



}



const tabReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'SET_DESTENATION':
                        return {
                                ...state,
                                destination: action.payload,

                        };


                case 'SET_USER_DATA': {
                        return {
                                ...state,
                               userData: action.payload.userdata,
                               accessToken:action.payload.accessToken
                        }
                }
                case 'OTP':{
                        return{
                                ...state,
                                otpsate:action.payload
                        }
                }
                case 'ACESS_TOKEN':{
                        return{
                                ...state,
                                accessToken:action.payload
                        }
                }
                case 'Loader':{
                        return{
                                ...state,
                                loader:action.payload
                        }

                }
                case 'ORDERPLACE':{
                        return{
                                ...state,
                                orderinitate:action.payload
                        }

                }

               

                default: return state

        }
}

export default tabReducer;