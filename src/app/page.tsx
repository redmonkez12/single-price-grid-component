import { Karla } from 'next/font/google'
import { Card } from "@/components/card";

const karla = Karla({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`${karla.className} bg-gray h-screen w-full grid place-items-center`}>
            <div className="px-8 w-full max-w-[39.688rem] grid md:px-0">
                <Card variant={"white"} text={"Join our community"}>
                    <div className={"text-emerald md:text-lg"}>30-day, hassle-free money back guarantee</div>

                    <div className={"text-darkGray font-normal text-sm mt-4 md:text-base"}>
                        Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
                    </div>
                </Card>
                <div className={"flex flex-col md:flex-row"}>
                    <Card variant={"green"} text={"Monthly Subscription"}>
                        <div className={"text-white flex items-center gap-2.5 mb-1"}>
                            <div className={"text-3xl tracking-[0.013rem]"}>$29</div>
                            <div className={"opacity-50 tracking-[0.013rem] font-normal"}>per month</div>
                        </div>
                        <div className={"mb-7 text-white font-normal"}>Full access for less than $1 a day</div>
                        <button className={"bg-emerald shadow-button tracking-[0.013rem] text-white py-3.5 rounded-[5px] w-full"} type={"button"}>Sign Up</button>
                    </Card>
                    <Card variant={"lightGreen"} text={"Why Us"}>
                        <ul className={"tracking-[0.011rem] text-white opacity-75 text-sm font-normal"}>
                            <li>Tutorials by industry experts</li>
                            <li>Peer & expert code review</li>
                            <li>Coding exercises</li>
                            <li>Access to our GitHub repos</li>
                            <li>Community forum</li>
                            <li>Flashcard decks</li>
                            <li>New videos every week</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </main>
    )
}
