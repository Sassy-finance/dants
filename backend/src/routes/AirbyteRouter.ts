import { Router, Request, Response } from 'express'
import axios from 'axios';
import config from '../config';

const router = Router()
const BASE_URL = config.AIRBYTE_BASE_URL

const createDestination = async (req: Request, res: Response) => {
    try {
        const {
            workspaceId,
            name,
            destinationDefinitionId,
            connectionConfiguration
        } = req.body

        axios.defaults.headers.common['Authorization'] = 'Basic YWlyYnl0ZTpkYW50c3RvdGhlbW9vbg==';

        const response = await axios.post(
            `${BASE_URL}/api/v1/destinations/create`,
            {
                workspaceId,
                name,
                destinationDefinitionId,
                connectionConfiguration
            }
        );
        return res.json(response.data);

    } catch (error) {
        console.log(error);
        return res.json('');
    }
}

const createSource = async (req: Request, res: Response) => {
    try {
        axios.defaults.headers.common['Authorization'] = 'Basic YWlyYnl0ZTpkYW50c3RvdGhlbW9vbg==';

        const {
            workspaceId,
            name,
            sourceDefinitionId,
            connectionConfiguration,
        } = req.body

        const response = await axios.post(
            `${BASE_URL}/api/v1/sources/create`,
            {
                workspaceId,
                name,
                sourceDefinitionId,
                connectionConfiguration
            }
        );
        return res.json(response.data);
    } catch (error) {
        console.log(error);
    }
};


const createConnection = async (req: Request, res: Response) => {
    try {
        axios.defaults.headers.common['Authorization'] = 'Basic YWlyYnl0ZTpkYW50c3RvdGhlbW9vbg==';

        const {
            name,
            sourceId,
            destinationId,
        } = req.body

        const response = await axios.post(
            `${BASE_URL}/api/v1/connections/create`,
            {
                "name": name,
                "namespaceDefinition": "destination",
                "namespaceFormat": "${SOURCE_NAMESPACE}",
                "prefix": "",
                "sourceId": sourceId,
                "destinationId": destinationId,
                "operationIds": [],
                "syncCatalog": {
                    "streams": [
                        {
                            "stream": {
                                "name": "borrows",
                                "jsonSchema": {
                                    "type": "object",
                                    "$schema": "http://json-schema.org/draft-04/schema#",
                                    "required": [
                                        "data"
                                    ],
                                    "properties": {
                                        "data": {
                                            "type": "object",
                                            "required": [
                                                "borrows"
                                            ],
                                            "properties": {
                                                "borrows": {
                                                    "type": "array",
                                                    "items": [
                                                        {
                                                            "type": "object",
                                                            "required": [
                                                                "id",
                                                                "hash",
                                                                "nonce",
                                                                "logIndex",
                                                                "blockNumber",
                                                                "timestamp",
                                                                "account",
                                                                "market",
                                                                "asset",
                                                                "amount",
                                                                "amountUSD"
                                                            ],
                                                            "properties": {
                                                                "id": {
                                                                    "type": "string"
                                                                },
                                                                "hash": {
                                                                    "type": "string"
                                                                },
                                                                "asset": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "id"
                                                                    ],
                                                                    "properties": {
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "nonce": {
                                                                    "type": "string"
                                                                },
                                                                "amount": {
                                                                    "type": "string"
                                                                },
                                                                "market": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "id"
                                                                    ],
                                                                    "properties": {
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "account": {
                                                                    "type": "object",
                                                                    "required": [
                                                                        "id"
                                                                    ],
                                                                    "properties": {
                                                                        "id": {
                                                                            "type": "string"
                                                                        }
                                                                    }
                                                                },
                                                                "logIndex": {
                                                                    "type": "integer"
                                                                },
                                                                "amountUSD": {
                                                                    "type": "string"
                                                                },
                                                                "timestamp": {
                                                                    "type": "string"
                                                                },
                                                                "blockNumber": {
                                                                    "type": "string"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                },
                                "supportedSyncModes": [
                                    "full_refresh"
                                ],
                                "defaultCursorField": [],
                                "sourceDefinedPrimaryKey": []
                            },
                            "config": {
                                "syncMode": "full_refresh",
                                "cursorField": [],
                                "destinationSyncMode": "append",
                                "primaryKey": [],
                                "aliasName": "borrows",
                                "selected": true,
                                "fieldSelectionEnabled": false
                            }
                        }
                    ]
                },
                "scheduleType": "manual",
                "status": "active",
                "sourceCatalogId": "8db09a3f-6399-41ca-b39c-76a6b2410a64",
                "geography": "auto",
                "breakingChange": false,
                "notifySchemaChanges": true,
                "nonBreakingChangesPreference": "ignore"
            }
        );
        return res.json(response.data);
    } catch (error) {
        console.log(error);
    }
};

router.post('/createDestination', createDestination)
router.post('/createSource', createSource)
router.post('/createConnection', createConnection)


export default router;