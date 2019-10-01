import { SELECT_CHANNEL,REQUEST_POST,RECIEVE_POST } from '../actions/index';

const reducer = (state= {}, action) => {
    switch(action.type){
        case SELECT_CHANNEL :
            return({...state, channel:action.channel})
        case REQUEST_POST:
            return({...state,loading:true})
        case RECIEVE_POST :
            return({...state,json:action.json,loading:false})
    }
}

export default reducer;