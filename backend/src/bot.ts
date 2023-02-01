import { getPipelinesCreating, updateStatus } from "./controllers/Pipeline"
import { updateStatusJob, getAllRunningJobs } from "./controllers/Job"

import db from './models'
import { buildImage, pushImage } from "./commands/docker"
import { getJobStatus, runJob } from "./commands/bacalhau"
import { getAllPendingJobs } from "./controllers/Job"

const createDockerFiles = async () => {
    const pipelines = await getPipelinesCreating()

    console.log({ pipelines })

    for (const pipeline of pipelines) {
        await buildImage(pipeline.id.toString())
        console.log('Image created successfully')
        await pushImage(pipeline.id.toString())
        console.log('Image pushed successfully')
        await updateStatus(pipeline.id.toString(), "COMPLETED")
    }
}

const createBacalhauJob = async () => {
    const jobs = await getAllPendingJobs()

    for (const job of jobs) {
        console.log(job)
        const result = await runJob(job.cid, job.id)
        await updateStatusJob(job.id, "RUNNING", result)
        console.log(result)
    }
}

const checkJobStatus = async () => {

    const jobs = await getAllRunningJobs()

    for (const job of jobs) {
        const { returnValue, publishedResult} = await getJobStatus(job.id)
        console.log(returnValue, publishedResult)
        await updateStatusJob(job.id, returnValue.toString().toUpperCase(), job.bacalhauJob, publishedResult)
    }

}

const checkNewPipelines = () => {
    createDockerFiles()
    createBacalhauJob()
    checkJobStatus()
}

function check() {
    checkNewPipelines()
    setTimeout(check, 30000);
}

db.sequelize.authenticate().then(
    check()
).catch(err => console.log(`Error connecting with the db ${err}`))

// checkNewPipelines();
