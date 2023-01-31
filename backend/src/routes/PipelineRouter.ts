import { Router, Request, Response } from 'express'
import { getAllUserpipelines, createPipeline } from '../controllers/Pipeline';
import { IPipeline } from '../models/Pipeline';
import fs from 'fs'


const router = Router()

const create = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            price,
            user,
            sourceOne,
            sourceTwo,
            sourceThree,
            sourceFour
        } = req.body

        const pipeline: IPipeline = {
            name,
            description,
            price,
            user,
            sourceOne,
            sourceTwo,
            sourceThree,
            sourceFour,
            code: "",
            status: "CREATING"
        }
        const pipelineSaved = await createPipeline(pipeline)

        return res.json(pipelineSaved);

    } catch (error) {
        console.log(error);
        return res.json('');
    }
}

const getUserPipelines = async (req: Request, res: Response) => {
    try {
        const {
            user,
        } = req.body

        const pipelines = await getAllUserpipelines(user)

        return res.json(pipelines)

    } catch (error) {
        console.log(error);
    }
};

const uploadCode = async (req: Request, res: Response) => {

    try {
        console.log('Uploading code');
        const pipeline = req.params.pipeline;
        const fileContent = req.body;

        fs.writeFile(`${pipeline}.py`, JSON.stringify(fileContent), (err) => {
            if (err) {
                console.log(err);
                res.status(500).send({ error: 'Could not write file to disk' });
                return;
            }
            res.send({ message: 'File written to disk' });
        });

    } catch (error) {
        console.log(error);
    }

};

router.post('/userPipelines', getUserPipelines)
router.post('/create', create)
router.post('/code/:pipeline', uploadCode)



export default router;