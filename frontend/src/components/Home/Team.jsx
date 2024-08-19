import { Button } from "@nextui-org/button"


export function TeamCard({ imgsrc = "https://github.com/aryanranderiya.png", name, position }) {
    return <div className="flex flex-col p-[2em] items-center gap-5 bg-[#00ff7b] bg-opacity-15 rounded-none">
        <img src={imgsrc} className="w-[200px] h-[200px]" />
        <div className="flex flex-col items-center">
            <span className="text-2xl">{name}</span>
            <span className="text-lg text-foreground-400">{position}</span>
        </div>
    </div>
}

export default function Team() {
    return <section className="min-h-screen justify-center h-fit w-full flex flex-col items-center gap-6">

        <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-5xl">The Team</span>
            <span className="font-normal text-md text-foreground-500">Meet the faces behind the club!</span>
        </div>

        <div className="flex flex-wrap gap-3 md:max-w-[70vw] justify-center mb-4">
            <TeamCard name="Anokhi Shah" position="President" />
            <TeamCard name="Saumya Talwani" position="Vice President" />
            <TeamCard name="Diya Mirani" position="Treasurer" />
            <TeamCard name="Dhyan Shah" position="Technical Head" />
        </div>

        <Button color="success" radius="none" size="lg" className="font-semibold text-lg">View All</Button>

    </section>
}