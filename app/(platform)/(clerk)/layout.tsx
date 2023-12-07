import React from "react";
interface ClerkLayoutProps {
    children: React.ReactNode;
}
const ClerkLayout: React.FC<ClerkLayoutProps> = ({ children }) => {
    return (
        <div className="flex items-center justify-center flex-col h-full">
            {children}
        </div>
    );
};

export default ClerkLayout;
