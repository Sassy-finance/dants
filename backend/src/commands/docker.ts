import { execSh } from "."

export const buildImage = async (tag: string) => {
    return execSh(
        `docker build -t ialberquilla/pipeline:${tag} .`
    )
}

export const pushImage = async (tag: string) => {
    return execSh(
        `docker push ialberquilla/pipeline:${tag}`
    )
}