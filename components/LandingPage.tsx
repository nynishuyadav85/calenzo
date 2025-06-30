'use client'

import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

const LandingPage = () => {
    return (
        <main className="flex items-center p-10 gap-24 max-md:flex-col">
            <section className="flex flex-col items-center">
                <Image
                    src={'/asset/logo.svg'}
                    alt="logo"
                    width={100}
                    height={100}
                />

                <h1 className="text-2xl font-black lg:text-3xl">
                    Your time, perfectly planned
                </h1>
                <p className="font-extralight">
                    Easily book meeting with this tool
                </p>
                <Image
                    src={'/asset/planning.svg'}
                    alt="logo"
                    width={500}
                    height={500}
                />
            </section>
            <div className="mt-3">
            <SignIn  
            routing="hash"
            appearance={{baseTheme: neobrutalism}}
            />
            </div>

        </main>
    )
}

export default LandingPage