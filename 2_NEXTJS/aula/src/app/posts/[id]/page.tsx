import { Suspense } from "react"
import { PostProps } from "../page"
import { PostInfo } from "./_components/post"

export default async function DetailPost({
    params
}: {
    params: Promise<{ id: string}>
}){

    const {id} = await params

    return(
        <div>
            <h1 className="text-4xl font-bold text-center">Detalhe do post: {id}</h1>

            <Suspense fallback= {<h1>Carregando...</h1>}>
                <PostInfo id = {id}/>
            </Suspense>

        </div>
    )
}