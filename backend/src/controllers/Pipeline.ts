import { IPipeline } from '../models/Pipeline'
import db from '../models'

export const createPipeline = async (pipeline: IPipeline) => {
  try {

    const pipelineSaved = await db.Pipeline.create(pipeline)

    return pipelineSaved

  } catch (error) {
    console.log(error)
    throw error
  }
}


export const getAllUserpipelines = async (user: string) => {
    try {
      const pipelines = await db.Pipeline.findAll({
        where: {
          user: user
        }
      });
  
      return pipelines
  
    } catch (error) {
      console.log(error)
      throw error
    }
}