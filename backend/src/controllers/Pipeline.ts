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

export const getPipelinesCreating = async () => {
  try {
    const pipelines = await db.Pipeline.findAll({
      where: {
        status: "CREATING"
      }
    });

    return pipelines

  } catch (error) {
    console.log(error)
    throw error
  }
}


export const updateStatus = async (id: string, status: string) => {
  try {
    return db.Pipeline.update(
      { status },
      { where: { id } }
  )

  } catch (error) {
    console.log(error)
    throw error
  }
}