import { GET_WALLETS, DELETE_WALLET, GET_WALLET } from "../actions/types";

const initialState = {
    wallets:[],
    wallet:'',
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_WALLETS:
            return {...state, wallets:action.payload};
            break;
        
        case GET_WALLET:
            return {...state, wallet:action.payload};
            break;

        case DELETE_WALLET:
            return {...state, wallets:state.wallets.filter(x => x.reference !== action.payload)};
            break;

        default:
            return state;
            break;
    }
}