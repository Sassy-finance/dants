import React, { useState, ReactNode } from 'react'
import { User } from '.'
import { ethers } from "ethers";
import lighthouse from '@lighthouse-web3/sdk';

interface UserProviderProps {
    children: ReactNode
}

const UserProvider = (props: UserProviderProps) => {
    const [isLogged, setIsLogged] = useState(false)
    const [provider, setProvider] = useState<any>(undefined)
    const [userWallet, setUserWallet] = useState<any>(undefined)
    const [wholeWallet, setWholeWallet] = useState<any>(undefined)


    const loginMetamask = async () => {
        if (!window.ethereum) {
            alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
        } else {
            await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            setProvider(provider)
            const signer = await provider.getSigner()
            const wholeWallet = await signer.getAddress()
            setWholeWallet(wholeWallet)
            const wallet = wholeWallet.substring(0, 4) + '...' + wholeWallet.substring(wholeWallet.length - 4, wholeWallet.length)
            setUserWallet(wallet)
            setIsLogged(true)
        }
    }


    const getUserUploads = async () => {
        const uploads = await lighthouse.getUploads(wholeWallet);
        console.log({uploads})
    }

    return (
        <User.Provider
            value={{
                isLogged,
                loginMetamask,
                userWallet,
                getUserUploads
            }}
        >
            {props.children}
        </User.Provider>
    )
}

export default UserProvider