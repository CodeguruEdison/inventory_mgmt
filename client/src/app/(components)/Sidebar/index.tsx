"use client"
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSideBarCollapsed } from '@/state'
import { Menu, Icon, LucideIcon, Layout, Archive, Clipboard, User, SlidersHorizontal, CircleDollarSign } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import SidebarLink from './SidebarLink'


const Sidebar = () => {
    const dispatch = useAppDispatch()
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const toggleSidebar = () => {
        dispatch(setIsSideBarCollapsed(!isSidebarCollapsed));
    }
    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
        } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
                <div>logo</div>
                <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>
                    samStock
                </h1>
                <button className={`md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100`}
                    onClick={toggleSidebar}>
                    <Menu className='w-4 h-4' />
                </button>
            </div>
            {/* LINKS */}
            <div className='flex-grow mt-8'>
                {/* LINKS  here*/}
                <SidebarLink href="/dashboard" Icon={Layout} label='Dashboard' isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/inventory" Icon={Archive} label='Inventory' isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/products" Icon={Clipboard} label='Products' isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/users" Icon={User} label='Users' isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/settings" Icon={SlidersHorizontal} label='Settings' isCollapsed={isSidebarCollapsed} />
                <SidebarLink href="/expenses" Icon={CircleDollarSign} label='Expenses' isCollapsed={isSidebarCollapsed} />
            </div>
            {/* footer */}
            <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} mb-10`}>
                <p className='text-center text-xs text-gray-500'> &copy;2024 samStock</p>
            </div>
        </div>
    )
}
export default Sidebar