import pb from "@/lib/base"
import Link from "next/link"
import { useEffect } from "react"

export default function BlogPage({data}: any) {
    useEffect(() => {
        console.log(data)
    })
    return (
        <div className="page">
            <div>blogs</div>
            {data.map((record:any,index:number) => {
                return <Link key={index} href={`/blogs/${record.id}`}>{record.title}</Link>
            })}
        </div>
    )
}

export async function getStaticProps() {
    const data = (await pb.collection('blogs').getList()).items.map(record => record.export())
    return {
        props: {
            data
        }
    }
}