const { ethers } = require("ethers");
const lighthouse = require('@lighthouse-web3/sdk');

const signAuthMessage = async (publicKey, privateKey) => {
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = new ethers.Wallet(privateKey, provider);
    const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data.message;
    const signedMessage = await signer.signMessage(messageRequested);
    return (signedMessage)
}

const setAccessControl = async (cid, publicKey, privateKey) => {
    const conditions = [
        {
            id: 1,
            chain: "Optimism",
            method: "getBlockNumber",
            standardContractType: "",
            returnValueTest: {
                comparator: ">=",
                value: "13349"
            },
        },
    ];

    const aggregator = "([1])";

    const signedMessage = await signAuthMessage(publicKey, privateKey);
    const response = await lighthouse.accessCondition(
        publicKey,
        cid,
        signedMessage,
        conditions,
        aggregator
    );

    console.log(response);
}

const deployEncrypted = async (apiKey, publicKey, privateKey, path) => {
    try {
        const signedMessage = await signAuthMessage(publicKey, privateKey);

        const response = await lighthouse.uploadEncrypted(
            path,
            apiKey,
            publicKey,
            signedMessage
        );
        // Display response
        console.log(response);

        setAccessControl(response.data.Hash, publicKey, privateKey)

    } catch (error) {

        throw new Error('Error')
    }

}

const apiKey = process.argv[2]
const publicKey = process.argv[3]
const privateKey = process.argv[4]
const path = process.argv[5]

deployEncrypted(apiKey, publicKey, privateKey, path)