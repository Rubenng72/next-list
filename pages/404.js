import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
            // router.go(1 or-1)
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>This Page Does Not Exist</h2>
            <p>Go Back To The <Link href="/"><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default NotFound ;