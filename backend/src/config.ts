import * as dotenv from 'dotenv'
dotenv.config()


const config = {
    app: { port: 4001 },
    AIRBYTE_BASE_URL : process.env. AIRBYTE_BASE_URL || 'http://localhost:8000',
    db: {
        database: process.env.DATABASE || "dants",
        userName: process.env.DATABASE_USER || "root",
        password: process.env.DATABASE_PASSWORD || "1234",
        host: process.env.DATABASE_HOST || "localhost"
      }
}

export default config