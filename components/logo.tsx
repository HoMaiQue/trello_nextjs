import { Routes } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../public/fonts/font.woff2",
});
export const Logo = () => {
    return (
        <Link href={Routes.HOME}>
            <div className="md:flex items-center hover:opacity-75 transition gap-x-2 hidden">
                <Image src="/logo.svg" width={30} height={30} alt="logo" />
                <p
                    className={cn(
                        "text-lg text-neutral-700 pb-1",
                        headingFont.className
                    )}
                >
                    Taskify
                </p>
            </div>
        </Link>
    );
};
