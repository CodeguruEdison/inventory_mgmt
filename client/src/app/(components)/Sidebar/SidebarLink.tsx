"use client"
import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface ISidebarlinkProps {
    href: string,
    Icon: LucideIcon,
    label: string,
    isCollapsed: boolean
}

const SidebarLink = (props: ISidebarlinkProps) => {
    const { href, isCollapsed, label, Icon } = props
    const pathName = usePathname()
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard");
    const parentCssClassName = useMemo(() => {
        return `cursor-pointer flex items-center ${isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'} 
            hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? 'bg-blue-200 text-white' : ''}`
    }, [isCollapsed, isActive])

    return (
        <Link href={href}>
            <div className={parentCssClassName}>
                <Icon className="w-6 h-6 !text-gray-700" />
                <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
                    {label}
                </span>
            </div>
        </Link>
    )
}
export default SidebarLink;


