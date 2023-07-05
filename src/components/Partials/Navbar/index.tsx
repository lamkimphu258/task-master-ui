import Button from "@/components/Button";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link href="/" className={style.logo}>
                <Image src="/logo.webp" width="50" height="50" alt="logo" />
                <span className={style.brand}>Task Master</span>
            </Link>
            <div className={style.navbarNav}>
                <Button type="primary">Sign Up</Button>
                <Button type="primary">Login</Button>
            </div>
        </nav>
    );
}
