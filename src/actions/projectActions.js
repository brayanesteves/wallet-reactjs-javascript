import axios from "axios";
import { GET_ERRORS } from "./types";

export const createWallet = (newWallet, history) => async dispath => {
    await axios.post(`http://localhost:8090/wallet`, newWallet).then((response) => {
        history.push('/dashboard');
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};