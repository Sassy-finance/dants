import { Router, Request, Response } from 'express'
import { getAllUserpipelines, createPipeline } from '../controllers/Pipeline';
import { IPipeline } from '../models/Pipeline';

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
            sourceFour
        }
        const pipelineSaved = createPipeline(pipeline)

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

router.post('/userPipelines', getUserPipelines)
router.post('/create', create)



export default router;