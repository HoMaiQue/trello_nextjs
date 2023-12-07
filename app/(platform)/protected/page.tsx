"use client";

import { Routes } from "@/constants/route";
import { useAuth, useUser, UserButton } from "@clerk/nextjs";

const ProtectedPage = () => {
    const { userId } = useAuth();
    const { user } = useUser();
    return (
        <div>
            <UserButton afterSignOutUrl={Routes.HOME} />
        </div>
    );
};

export default ProtectedPage;
