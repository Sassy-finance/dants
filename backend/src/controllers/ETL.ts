import { IETL } from '../models/ETL'
import db from '../models'

export const createETL = async (etl: IETL) => {
  try {

    const etlSaved = await db.ETL.create(etl)

    return etlSaved

  } catch (error) {
    console.log(error)
    throw error
  }
}


export const getAllUserETLs = async (user: string) => {
  try {

    try {
      const etls = await db.ETL.findAll({
        where: {
          user: user
        }
      });
  
      return etls
  
    } catch (error) {
      console.log(error)
      throw error
    }

  } catch (error) {
    console.log(error)
    throw error
  }
}