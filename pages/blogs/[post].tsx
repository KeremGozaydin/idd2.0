import { BLOG_ID, DATABASE_ID, databases } from "@/lib/appwrite"
import { bgColorsBlack, pickRandFromArr } from "@/lib/usefulFunctions"
import { Avatar, Box, Tooltip, Typography } from "@mui/material"
import { Query } from "appwrite"
import {useEffect} from "react"
import {remark} from "remark"
import html from 'remark-html';

export default function BlogPost(props:any){
    useEffect(() => {
        console.log(props.data.post)
    },[])
    let {author,title,post} = props.data
    post = `
    Sürdürülebilir ekolojik yaşam 
    
    (Zahide Tuğçe Öz)
    
    Bir süredir ekolojik dengemiz altüst oldu. Yüksek hava sıcaklıkları, normal dışı afetler gibi durumlar ise bu bozulmanın sonucu olmakla birlikte bize de bir uyarıdır. Bu durumu çözebilmek için doğanın dengesini dikkate alarak sürdürülebilir bir yaşama geçmemiz gerekiyor. 
    
    Sürdürülebilir yaşam; beslenmeden tarıma ve hayvancılığa, ekolojiden çevreye, modaya, temiz havadan suya, iş hayatından teknolojiye kadar birçok disiplini içinde barındırır.  
    
    Bu yaşam tarzının amacı doğanın dengesini korumak, çevreyle uyum içinde yaşamak ve gelecek nesillere daha yaşanabilir bir dünya bırakmaktır. 
    
    Sürdürülebilir bir yaşam için ; sadeleşmek, çöp kullanımını azaltmak, planlı bir alışveriş yapmak, fosil yakıt kullanımını azaltmak, geri dönüştürülebilen ürünleri satın almak, tek kullanımlık plastikleri azaltmak gibi minik adımlar uygulanabilir.  
    
    Boşa akan suyu kapatmak bile fark yaratacak bir adımdır. 
    
    SADELEŞMEK VE MİNİMALİZM 
    
    Minimalizm; azın çok olduğunu savunan, sadelik ve nesnelliği öne çıkaran bir akımdır. 
    
    Sürdürülebilir ekolojik yaşam ile bağlantısı da tek kullanımlık ürünleri satın almayarak başlıyor. Örneğin, tek kullanımlık plastikler.  
    
     Plastikler, genel olarak geri dönüştürülebilen maddeler değildir aynı zamanda doğada uzun süre kaybolmayarak toprağımızı kirletiyor. Bunun yerine sonsuz kez geri dönüştürülebilen cam ve metal eşyalar, çok kullanımlık plastikler kullanılabilir. 
    
    Minimalizme başlamak ise çok zor değil aslında. 
    
     Önce elimizdeki eşyaları tüketip sonra sürdürülebilir olanına minik adımlarla geçilebilir.  
    
    İhtiyaç olmayan eşyalar bir başkasına verilebilir. 
    
    En önemlisi ise planlı alışveriş yapmak. Önemini küçük bir örnekle açıklayayım. Örneğin, internetten ihtiyacınız olmayan bir pantolon sipariş ettiniz. Bir kot pantolonun üretiminde 15.000 L su harcanıyor. Gezegene yükü hayli büyük. Bu pantolonu geri göndermek istediğinizde ise yükü daha fazla artıyor. Gezegenimizin yükünü azaltmak için gerçekten ihtiyacımızın olup olmadığını, uzun süre kullanabileceğimizi sorgulamak ve planlamakta fayda var.  
    
    ÇÖPLERİMİZİ AZALTMAK
    
    Belki de ekolojik hayatın en önemli durumlarından biridir. Masum görünen doğal atıklar bile doğru bir şekilde toprakla buluşmazsa sera gazı salacaktır. Çöplerimizi azaltmak için atabileceğimiz ilk adım gıda alışverişi yaparken plastik poşetler yerine alışveriş fileleri kullanmak ve ihtiyacımız kadar gıda almak. Kullandığımız gıdaları ise kompost yaparak geri dönüştürebiliriz. 
    
     Ekolojik hayat aslında zor olan bir durum değil. İnsanın elindeki her şey bakış açısına göre sürdürülebilir olabiliyor. Önemli olan sorumluluğumuzu fark etmek ve bunun  için çabalamaktır.
    `
    return (
        <div className="page">
            <Typography sx={{marginTop: "1em"}} variant="h3">{title}</Typography>
            <Typography sx={{fontStyle: "italic"}}>Written by {author}</Typography>
            <Box sx={{
                width: "max(70%,300px)",
                borderRadius: "0.5em",
                backgroundColor: "#536878",
                color: "white",
                marginTop: "2em",
                padding: "1em",
                display: "flex",
                flexFlow: "column nowrap",
                overflowWrap: "break-word"

            }}>
                <Tooltip placement="top" title={author}>
                    <Avatar sx={{backgroundColor: pickRandFromArr(bgColorsBlack),color: "black", boxShadow: 3}}>{author.slice(0,1)}</Avatar>
                </Tooltip>
                
            </Box>
        </div>
    )

}

export async function getStaticPaths() {
    const paths = (await databases.listDocuments(DATABASE_ID,BLOG_ID)).documents.map((rec) => ({params: {post: rec.$id}}))
    return {
        paths,
        fallback: false 
    }
}

export async function getStaticProps({params}:any) {
    const data = (await databases.listDocuments(DATABASE_ID,BLOG_ID,[Query.equal("$id",params.post)])).documents[0]
    return {
        props: {
            data
        }
    }
}