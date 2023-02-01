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


export const getAllPendingJobs = async () => {
  try {
    const jobs = await db.Job.findAll({
      where: {
        status: 'CREATING'
      }
    });

    return jobs

  } catch (error) {
    console.log(error)
    throw error
  }
}


export const getAllRunningJobs = async () => {
  try {
    const jobs = await db.Job.findAll({
      where: {
        status: 'RUNNING'
      }
    });

    return jobs

  } catch (error) {
    console.log(error)
    throw error
  }
}


export const updateStatusJob = async (id: string, status: string, bacalhauJob, result: string = "") => {
  try {
    return db.Job.update(
      { status, bacalhauJob, result },
      { where: { id } }
    )

  } catch (error) {
    console.log(error)
    throw error
  }
}

