import Link from "next/link";
import React from "react";

interface MenuItemProps {
    title: string;
    address: string;
    Icon: React.ComponentType<{ className?: string}>;
}

const MenuItem: React.FC<MenuItemProps> = ({title, address, Icon}) => {
    return (
        <Link href={address} className="hover:text-amber-500">
            <Icon className="text-2xl sm:hidden" />
            <p className="uppercase inline text-sm">{title}</p>
        </Link>
    )
}

export default MenuItem;
