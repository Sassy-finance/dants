const axios = require ('axios');

const BASE_URL = 'http://localhost:3001'

 export const createDestination = async (
    workspaceId,
    name,
    destinationDefinitionId,
    apiKey,
    publicKey,
    privateKey,
    pipelineName,
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
