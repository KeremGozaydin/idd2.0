import pb from "@/lib/base"

interface staticPropsContext {
    params: {
        post: string
    }
}


export default function BlogPost(props:any){
    return (
        <div>selam</div>
    )

}

export async function getStaticPaths() {
    const paths = (await pb.collection('blogs').getList()).items.map((record) => ({params: {post: record.export()["link"]}}));
    console.log(paths)
    return {
        paths,
        fallback: false 
    }
}

export async function getStaticProps({params}: staticPropsContext) {
    const data = (await pb.collection('blogs').getList(1,1,{
            filter: `link = "${params.post}"`
        })).items[0].export()
    return {
        props: {
            data
        }
    }
}