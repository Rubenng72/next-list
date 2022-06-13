import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src="/list.png" width={100} height={77} />
            {/* <img src="/list.png" /> */}
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/list"><a>Listing</a></Link>
            
        </nav>
     );
}
 
export default Navbar;