import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Register() {
    return (
        <main className="flex flex-col items-center p-5 gap-10">
            <Image
                src='/asset/logo.svg'
                alt="logo"
                width={100}
                height={100}
            />
            <div className="mt-3">
                <SignUp />
            </div>
        </main>
    )
}