import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface text {
    [key: string]: any
}

export let useLocaleText = (turkish:text, english:text) => {
    let [text,setText] = useState(english)
    let router = useRouter()

    useEffect(() => {
        if (router.locale == "tr-TR") {
            setText(turkish)
        } else {
            setText(english)
        }
    },[router.locale])

    return text
}

export let localeTrans = (tr:string, en:string) => {
    let router = useRouter()
    if (router.locale == "tr-TR") {
        return tr
    } else {
        return en
    }
}