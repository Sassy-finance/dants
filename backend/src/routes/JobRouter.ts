import { Router, Request, Response } from 'express'
import { getAllPipelinesJobs, createJob } from '../controllers/Job';
import { IJob } from '../models/Job';


const router = Router()

const create = async (req: Request, res: Response) => {
    try {
        const {
            cid,
            pipeline
        } = req.body

        const job: IJob = {
            cid,
            pipeline,
            result: "",
            status: "CREATING",
            bacalhauJob: ""
        }
        const jobSaved = await createJob(job)

        return res.json(jobSaved);

    } catch (error) {
        console.log(error);
        return res.json('');
    }
}

const getPipelinesJobs = async (req: Request, res: Response) => {
    try {
        const {
            pipeline,
        } = req.body

        const jobs = await getAllPipelinesJobs(pipeline)

        return res.json(jobs)

    } catch (error) {
        console.log(error);
    }
};

router.post('/jobPipelines', getPipelinesJobs)
router.post('/create', create)



export default router;