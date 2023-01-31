import { execSh } from "."

export const runJob = async (cid: string, image: string) => {
    return execSh(
        `bacalhau docker run  --wait --input-urls=${cid} ${image}`
    )
}

export const getJobStatus = async (job: string) => {
    const result: any = await execSh(
        `bacalhau list ${job} --output=json`
    ) as any

    const jsonResult = JSON.parse(result.stdout)
    const nodes = jsonResult[0].Status.JobState
    
    console.log(nodes)
}