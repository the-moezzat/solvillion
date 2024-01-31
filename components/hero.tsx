'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel, CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const content = [{
        title: "تحسين جودة مياه الصرف بأفكار هندسية مبتكرة!",
        description: "تكنولوجيا متقدمة لتحسين جودة المياه بأفكار هندسية تحدث تغييرًا جذريً."},
    {
        title: "نظام لامركزي لمياه الصرف سهل التركيب وسريع الصيانة!",
        description: "تم تصميمه وصُنعه بأيادي أردنية، نظام فعّال يجسد التكنولوجيا البسيطة والاعتناء بالتفاصيل لتحقيق أقصى قدر من الفعالية والسهولة في الاستخدام والصيانة."
    },
    {
        title: "حلول بيئية تحول مياه الصرف إلى ثروة خضراء!",
        description: "اكتشف كيف يمكن للتكنولوجيا البيئية تحويل مياه الصرف إلى مصدر غني بالخضرة للحفاظ على مستقبلنا البيئي."
    }]

const overview = [{
    title: "ريادة في الحلول",
    description: "تحسين جودة مياه الصرف بأفكار هندسية مبتكرة"},
    {
    title: "البساطة والكفاءة",
    description: "نظام لامركزي لمياه الصرف سهل التركيب وسريع الصيانة"},
    {
    title: "المستقبل المستدام",
    description: "حلول بيئية تحول مياه الصرف إلى ثروة خضراء"},
]

function Hero() {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)


    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            console.log("current")
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className={'flex flex-col gap-24'} dir={'rtl'}>
            <Carousel className="w-full" setApi={setApi} opts={{
                direction: "rtl"
            }}>
                <CarouselContent>
                    {content.map(({title, description}, index) => (
                        <CarouselItem key={index}>
                            <div className={'flex flex-col gap-6'}>
                                <h1 className={'text-5xl text-[#3EC2F1] font-bold'}>
                                    {title}
                                </h1>
                                <p className={'text-white text-xl'}>{description}</p>
                            </div>
                            <div className="p-1">
                                {/*<Card>*/}
                                {/*    <CardContent className="flex aspect-square items-center justify-center p-6">*/}
                                {/*        <span className="text-4xl font-semibold">{index + 1}</span>*/}
                                {/*    </CardContent>*/}
                                {/*</Card>*/}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/*<CarouselPrevious />*/}
                {/*<CarouselNext />*/}
            </Carousel>

            <div className={'grid grid-cols-3 gap-4 w-full items-center'}>
                {overview.map(({title, description}, index) => (
                    <div key={index}
                        className={`transition-all flex flex-col gap-4`}>
                        <span className={`w-full h-2 ${index === current ? "bg-[#3DC2F1]" : "bg-gray-300"}  rounded-full`}></span>
                        <h2 className={`text-2xl font-bold ${index === current ? "text-[#3DC2F1]" : "text-white"}`}>{title}</h2>
                        <p className={`text-white text-base`}>{description}</p>
                    </div>
                        ))}
            </div>
        </div>
    );
}

export default Hero;