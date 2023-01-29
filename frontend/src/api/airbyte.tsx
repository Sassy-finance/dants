import axios from 'axios';
import { API_BASE_URL } from '../config';

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
            `${API_BASE_URL}/api/v1/airbyte/createDestination`,
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


export const runConnection = async (
    connectionId: string
) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/api/v1/airbyte/runConnection`,
            {
                connectionId
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
            `${API_BASE_URL}/api/v1/airbyte/createSource`,
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
    user: string,
    sourceName: string,
    destinationName: string,
    description: string
) => {
    try {

        const response = await axios.post(
            `${API_BASE_URL}/api/v1/airbyte/createConnection`,
            {
                name,
                sourceId,
                destinationId,
                user,
                sourceName,
                destinationName,
                description
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllETLs = async (
    user: string,
) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/api/v1/airbyte/userETLs`,
            {
                user: user || ' '
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

