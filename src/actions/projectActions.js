import axios from "axios";

export const createWallet = (newWallet, history) => async dispath => {
    await axios.post(`http://localhost:8090/wallet`, newWallet).then((response) => {
        history.push('/dashboard');
    }).catch((error) => {

    });
};