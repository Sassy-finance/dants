import React, { useState, ReactNode } from 'react'
import { User } from '.'
import { ethers } from "ethers";
import lighthouse from '@lighthouse-web3/sdk';
import { DANTS_TOKEN_ADDRESS, PIPELINE_SHOP_ADDRESS } from '../config';
import { abi } from '../artifacts/PipelineShop.json'
import Dants from '../artifacts/Dants.json'


interface UserProviderProps {
    children: ReactNode
}

const UserProvider = (props: UserProviderProps) => {
    const [isLogged, setIsLogged] = useState(false)
    const [provider, setProvider] = useState<any>(undefined)
    const [userWallet, setUserWallet] = useState<any>(undefined)
    const [wholeWallet, setWholeWallet] = useState<any>(undefined)
    const [pipelineContract, setPipelineContract] = useState<any>(undefined)
    const [dantsToken, setDantsToken] = useState<any>(undefined)
    const [signer, setSigner] = useState<any>(undefined)



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
            setSigner(signer)
            const wholeWallet = await signer.getAddress()
            setWholeWallet(wholeWallet)
            const wallet = wholeWallet.substring(0, 4) + '...' + wholeWallet.substring(wholeWallet.length - 4, wholeWallet.length)
            setUserWallet(wallet)
            setIsLogged(true)
            const contract = new ethers.Contract(
                PIPELINE_SHOP_ADDRESS,
                abi,
                provider
            )
            setPipelineContract(contract)
            const token = new ethers.Contract(
                DANTS_TOKEN_ADDRESS,
                Dants.abi,
                provider
            )
            setDantsToken(token)
        }
    }

    const sleep = (milliseconds: any) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const waitTransaction = async (txHash: string): Promise<boolean> => {
        let transactionReceipt = null
        const expectedBlockTime = 2000;
        while (transactionReceipt == null) {
            transactionReceipt = await provider.getTransactionReceipt(txHash);
            await sleep(expectedBlockTime)
        }
        return true
    }


    const getUserUploads = async () => {
        const uploads = await lighthouse.getUploads(wholeWallet);
        return uploads;
    }

    const buyPipeline = async (pipelineId: string, price: string) => {
        const tx = await dantsToken.connect(signer).approve(PIPELINE_SHOP_ADDRESS, price)
        await waitTransaction(tx.hash)
        const txBuy = await pipelineContract.connect(signer).buyPipeline(pipelineId, price)
        await waitTransaction(txBuy.hash)
      }

    return (
        <User.Provider
            value={{
                isLogged,
                loginMetamask,
                userWallet,
                getUserUploads,
                wholeWallet,
                buyPipeline
            }}
        >
            {props.children}
        </User.Provider>
    )
}

export default UserProvider