import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="flex flex-col items-center p-5 gap-10">
            <Image
                src='/asset/logo.svg'
                alt="logo"
                width={100}
                height={100}
            />
            <div className="mt-3">
                <SignIn appearance={{ baseTheme: dark }} />
            </div>
        </main>
    )
}