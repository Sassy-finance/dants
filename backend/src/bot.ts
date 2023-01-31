import { getPipelinesCreating, updateStatus } from "./controllers/Pipeline"
import db from './models'
import { buildImage, pushImage } from "./commands/docker"

const createDockerFiles = async () => {
    const pipelines = await getPipelinesCreating()

    for (const pipeline of pipelines) {
        await buildImage(pipeline.id.toString())
        await pushImage(pipeline.id.toString())
        await updateStatus(pipeline.id.toString(), "COMPLETED")
    }
}

const checkNewPipelines = () => {
    db.sequelize.authenticate().then(
        createDockerFiles()
    ).catch(err => console.log(`Error connecting with the db ${err}`))
}


function check() {
    checkNewPipelines()
    setTimeout(check, 5000);
}

check();