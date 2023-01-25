import axios from 'axios';

const BASE_URL = 'http://localhost:3002'

export const createDestination = async (
    workspaceId: string,
    name: string,
    destinationDefinitionId: string,
    apiKey: string,
    publicKey: string,
    privateKey: string,
    pipelineName: string,
) => {
    try {

        const connectionConfiguration = {
            api_key: apiKey,
            public_key: publicKey,
            private_key: privateKey,
            pipeline_name: pipelineName
        }

        const response = await axios.post(
            `${BASE_URL}/api/v1/destinations/create`,
            {
                workspaceId,
                name,
                destinationDefinitionId,
                connectionConfiguration
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const createSource = async (
    workspaceId: string,
    name: string,
    destinationDefinitionId: string,
    apiKey: string,
    publicKey: string,
    privateKey: string,
    pipelineName: string,
) => {
    try {

        const connectionConfiguration = {
            api_key: apiKey,
            public_key: publicKey,
            private_key: privateKey,
            pipeline_name: pipelineName
        }

        const response = await axios.post(
            `${BASE_URL}/api/v1/source/create`,
            {
                workspaceId,
                name,
                destinationDefinitionId,
                connectionConfiguration
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const createConnection = async (
    workspaceId: string,
    name: string,
    destinationDefinitionId: string,
    apiKey: string,
    publicKey: string,
    privateKey: string,
    pipelineName: string,
) => {
    try {

        const connectionConfiguration = {
            api_key: apiKey,
            public_key: publicKey,
            private_key: privateKey,
            pipeline_name: pipelineName
        }

        const response = await axios.post(
            `${BASE_URL}/api/v1/connections/create`,
            {
                workspaceId,
                name,
                destinationDefinitionId,
                connectionConfiguration
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

