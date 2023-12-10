import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/route";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";

export default function Navbar() {
    return (
        <div className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
            {/* mobile sidebar */}
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button
                variant="primary"
                    size="sm"
                    className="rounded-sm md:block h-auto py-1.5 px-2 hidden "
                >
                    Create
                </Button>
                <Button
                variant="primary"
                    size="sm"
                    className="rounded-sm md:hidden block h-auto  "
                >
                    <Plus className="h-4 w-4" />
                </Button>
            </div>

            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl={Routes.ORGANIZATION}
                    afterLeaveOrganizationUrl={Routes.SELECT_ORG}
                    afterSelectOrganizationUrl={Routes.ORGANIZATION}
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            },
                        },
                    }}
                />

                <UserButton afterSignOutUrl={Routes.HOME} appearance={{
                    elements: {
                        avatarBox: {
                            height: 30,
                            width: 30
                        }
                    }
                }} />
            </div>
        </div>
    );
}
