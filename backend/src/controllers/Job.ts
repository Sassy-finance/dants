import { IJob } from '../models/Job'
import db from '../models'

export const createJob = async (job: IJob) => {
  try {

    const jobSaved = await db.Job.create(job)
    return jobSaved

  } catch (error) {
    console.log(error)
    throw error
  }
}


export const getAllPipelinesJobs = async (pipeline: string) => {
    try {
      const jobs = await db.Job.findAll({
        where: {
          pipeline
        }
      });
  
      return jobs
  
    } catch (error) {
      console.log(error)
      throw error
    }
}
