import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/route";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const headingFont = localFont({
    src: "../../public/fonts/font.woff2",
});
const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div
                className={cn(
                    "flex items-center justify-center flex-col",
                    headingFont.className
                )}
            >
                <div className="flex bg-amber-100 text-amber-700 uppercase border mb-4 items-center shadow-sm p-4 rounded-full">
                    <Medal className="h-6 w-6 mr-2" />
                    No 1 task management
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 ">
                    Taskify helps team move
                </h1>
                <div className=" w-fit text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 ">
                    work forward.
                </div>
            </div>

            <div
                className={cn(
                    poppins.className,
                    "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
                )}
            >
                Collaborate, manage projects and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique - accomplish it all with taskify
            </div>
            <Button className="mt-6" asChild>
                <Link href={Routes.SIGN_UP}>Get Taskify for free</Link>
            </Button>
        </div>
    );
};

export default MarketingPage;
