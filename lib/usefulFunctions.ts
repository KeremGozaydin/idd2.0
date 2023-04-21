export function getFirst100char(str:string){
    let newStr:string | string[] = str.slice(0,110).split(" ")
    newStr.pop()
    newStr = newStr.join(" ")
    return newStr
}

export function pickRandFromArr(array:any[]){
    return array[Math.floor(Math.random() * array.length)]
}

export const bgColorsBlack = ["gold","khaki","violet","rebeccapurple","cyan","darkturquoise"]