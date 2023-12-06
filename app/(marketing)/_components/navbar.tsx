import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/route";
import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <div className="fixed top-0 w-full px-4 flex items-center bg-white shadow-sm border-b h-14">
            <div
                className="md:max-w-screen-2xl mx-auto flex items-center
            w-full justify-between
        "
            >
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" asChild variant="outline">
                        <Link href={Routes.SIGN_IN}>Login</Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href={Routes.SIGN_UP}>Get Taskify for free</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
