import AnimatedStatCount from "./AnimatedStatCount"

interface Props {
    className: string,
    stats: any;
    items: Array<{
        id: string | number;
        title: string;
        value: string | number;
    }>
}

function StatsSection_1({ className, stats, items }: Props) {
    return (
        <div className={"w-full bg-black/95 py-36 grid max-lg:gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center " + className} >
            {
                items?.map(item => (
                    <div className="relative" key={item.id}>
                        <p className="text-white/90 text-2xl lg:text-3xl w-max font-medium absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                            {item.title} test
                        </p>
                        <AnimatedStatCount
                            speed={25}
                            start={0}
                            end={parseInt(item.value+"")}
                            counterClassName="!text-8xl lg:!text-9xl !font-bold !text-slate-300/40"
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default StatsSection_1