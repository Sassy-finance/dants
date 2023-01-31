import { getPipelinesCreating, updateStatus } from "./controllers/Pipeline"
import db from './models'
import { buildImage, pushImage } from "./commands/docker"
import { getJobStatus } from "./commands/bacalhau"

const createDockerFiles = async () => {
    const pipelines = await getPipelinesCreating()

    console.log({pipelines})

    for (const pipeline of pipelines) {
        await buildImage(pipeline.id.toString())
        console.log('Image created successfully')
        await pushImage(pipeline.id.toString())
        console.log('Image pushed successfully')
        await updateStatus(pipeline.id.toString(), "COMPLETED")
    }
}

const checkNewPipelines = () => {
    db.sequelize.authenticate().then(
        createDockerFiles()
    ).catch(err => console.log(`Error connecting with the db ${err}`))
}


// function check() {
//     checkNewPipelines()
//     setTimeout(check, 5000);
// }

checkNewPipelines();
