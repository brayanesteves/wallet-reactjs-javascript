import axios                                            from "axios";
import       { DELETE_WALLET, GET_ERRORS, GET_WALLETS } from "./types";

export const createWallet = (newWallet, history) => async dispath => {
    await axios.post(`http://localhost:8090/wallet`, newWallet).then((response) => {
        history.push('/dashboard');
    }).catch((error) => {
        console.log(error)
        dispath({ type:GET_ERRORS, payload:error });
    });
};

export const getWallets = () => async dispath => {
    await axios.get(`http://localhost:8090/wallet/find-all-order-by-priority`).then((response) => {
    dispath({ type:GET_WALLETS, payload:response.data });
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};

export const deleteWallet = (reference) => async dispath => {
    await axios.delete(`http://localhost:8090/wallet/${reference}`).then((response) => {
    dispath({ type:DELETE_WALLET, payload:reference });
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};