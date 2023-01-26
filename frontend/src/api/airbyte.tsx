import axios from 'axios';

const BASE_URL = 'http://localhost:4001'

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
            `${BASE_URL}/api/v1/airbyte/createDestination`,
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
    sourceDefinitionId: string,
    entity: string,
    subgraph: string,
    start_date: string,
) => {
    try {

        const connectionConfiguration = {
            entity,
            subgraph,
            start_date
        }

        console.log({
            workspaceId,
            name,
            sourceDefinitionId,
            connectionConfiguration
        })

        const response = await axios.post(
            `${BASE_URL}/api/v1/airbyte/createSource`,
            {
                workspaceId,
                name,
                sourceDefinitionId,
                connectionConfiguration
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const createConnection = async (
    name: string,
    sourceId: string,
    destinationId : string,
) => {
    try {

        const response = await axios.post(
            `${BASE_URL}/api/v1/airbyte/createConnection`,
            {
                name,
                sourceId,
                destinationId
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

