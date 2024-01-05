import axios                                                        from "axios";
import       { DELETE_WALLET, GET_ERRORS, GET_WALLET, GET_WALLETS } from "./types";

// <WALLET> //
export const createWallet = (newWallet, history) => async dispath => {
    await axios.post(`/wallet`, newWallet).then((response) => {
        history.push('/dashboard');
    }).catch((error) => {
        console.log(error)
        dispath({ type:GET_ERRORS, payload:error });
    });
};

export const updateWallet = (reference, updateWallet, history) => async dispath => {
    
    await axios.put(`/${reference}`, updateWallet).then((response) => {
        
    }).catch((error) => {
        console.log(error)
        dispath({ type:GET_ERRORS, payload:error });
    });
};

export const getWallets = () => async dispath => {
    await axios.get(`/wallet/find-all-order-by-priority`).then((response) => {
    dispath({ type:GET_WALLETS, payload:response.data });
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};

export const getWallet = (reference) => async dispath => {
    await axios.get(`/wallet/${reference}`).then((response) => {
    dispath({ type:GET_WALLET, payload:response.data });
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};

export const deleteWallet = (reference) => async dispath => {
    await axios.delete(`/wallet/${reference}`).then((response) => {
    dispath({ type:DELETE_WALLET, payload:reference });
    }).catch((error) => {
        dispath({ type:GET_ERRORS, payload:error.response.data });
    });
};
// <.WALLET> //

// <TRANSACTION> //
export const createTransaction = (newTransaction, walletReference, history) => async dispath => {
    await axios.post(`/transaction/${walletReference}`, newTransaction).then((response) => {
        history.push(`/transaction/${walletReference}`);
    }).catch((error) => {
        console.log(error)
        dispath({ type:GET_ERRORS, payload:error });
    });
};
// <.TRANSACTION> //