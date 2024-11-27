import Image from "next/image";
import Link from "next/link";

export const metaDeta = {
    title: "Page not found"
}

export default function NotFound(){
    return (
        <div className="px-2 py-10 w-full flex-col items-center justify-center">
            <h2 className="text-2xl text-center">Page Not Found</h2>
            <Image width={300} height={300} sizes="300px" alt="Page not found" className="m-0 rounded-xl mx-auto" src="/images/not-found-1024x1024.webp" />
            <p className="text-center">
            <Link href="/">Return Home</Link>
            </p>
        </div>
    )
}