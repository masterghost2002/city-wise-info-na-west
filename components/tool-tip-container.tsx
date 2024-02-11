"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useRouter } from "next/navigation"
type props = {
    city: string;
    population: number;
    temperature: number;
    airQuality: string;
    color: string;
}
export default function ToopTipContainer({
    city,
    population,
    temperature,
    airQuality,
    color,
}: props) {
    const router = useRouter();
    return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger
                    asChild>
                        <div
                            className="flex justify-center items-center p-2 flex-1 h-full w-full text-xl font-bold cursor-pointer relative"
                            onClick={() => {
                                router.push(`/${city}`);
                            }}
                        >
                            {city}

                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <div className="flex flex-col p-2">
                            <div>
                                <span className="font-bold">Population:</span>
                                <span>{population}</span>
                            </div>
                            <div>
                                <span className="font-bold">Temperature:</span>
                                <span style={{color:color}}>{temperature}</span>
                            </div>
                            <div>
                                <span className="font-bold">Air Quality:</span>
                                <span>{airQuality}</span>
                            </div>
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
    )
}
