import Link from "next/link";
import React from "react";

interface FooterItemProps {
    title: string;
    address: string;
    Icon: React.ComponentType<{ className?: string}>;
}

const FooterItem: React.FC<FooterItemProps> = ({title, address, Icon}) => {
    return (
        <a target="_blank" href={address} className="hover:text-amber-500">
            <Icon className="text-2xl" />
            <p className="uppercase hidden text-sm">{title}</p>
        </a>
    )
}

export default FooterItem;
