import Link from "next/link";
import { Button } from "./UI/button";
import Nav from "./Nav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex gap-8 justify-between">
                {/*logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Lakchika 
                        <span className="text-accent text-7xl font-semibold">.</span>
                    </h1>
                </Link>
                {/*nav*/}

                
                <Nav/>
                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
                  
            </div>
        </header>
    );
};

export default Header;