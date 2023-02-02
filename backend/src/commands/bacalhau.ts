import { execSh } from "."

export const runJob = async (cid: string, pipeline: string) => {
    const result: any = await execSh(
        `bacalhau docker run --id-only --wait --input-urls=https://${cid}.ipfs.dweb.link/file.tar.gz ialberquilla/pipeline:id:${pipeline}`
    ) as any

    return result.stdout.toString().trim()
}

export const getJobStatus = async (job: string) => {
    const result: any = await execSh(
        `bacalhau list ${job} --output=json`
    ) as any

    const jsonResult = JSON.parse(result.stdout)
    const nodes = jsonResult[0].Status.JobState
    const values = Object.values(nodes);
    const shards = Object.values(values[0])
    const shardZero = shards.filter(shard => shard.Shards['0'].PublishedResults.CID)
    const returnValue = shardZero[0].Shards['0'].State
    const publishedResult = shardZero[0].Shards['0'].PublishedResults.CID

    return({
        returnValue,
        publishedResult
    })
}