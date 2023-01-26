import * as dotenv from 'dotenv'
dotenv.config()


const config = {
    app: { port: 4001 },
    AIRBYTE_BASE_URL : process.env. AIRBYTE_BASE_URL || 'http://localhost:8000'
}

export default config