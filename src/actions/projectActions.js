import   axios                     from "axios";
import { GET_ERRORS, GET_WALLETS } from "./types";

export const createWallet = (newWallet, history) => async dispath => {
    await axios.post(`http://localhost:8090/wallet`, newWallet).then((response) => {
        history.push('/dashboard');
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};

export const getWallets = (newWallet, history) => async dispath => {
    await axios.post(`http://localhost:8090/wallet/find-all-order-by-priority`, newWallet).then((response) => {
        dispath({ type:GET_WALLETS, payload:response.data });
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};