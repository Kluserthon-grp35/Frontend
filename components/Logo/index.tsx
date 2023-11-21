import Link from "next/link";

export default function Logo(){
    return (
        <Link href="/" className=" text-[2.5rem] font-bold text-primary capitalize ">
            pay<span className="capitalize text-secondary ">Zen</span>
        </Link>
    )
}
