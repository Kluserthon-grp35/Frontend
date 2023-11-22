import Link from "next/link";

export default function Logo(){
    return (
        <Link href="/" className=" text-[2rem] font-bold text-primary capitalize ">
            pay<span className="capitalize text-secondary ">Zen</span>
        </Link>
    )
}
