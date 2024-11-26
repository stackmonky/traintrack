
'use client'

import { useState, useContext } from 'react'
import AppContext from '../context/appContext'

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    ChartBarSquareIcon,
    FolderIcon,
    UserCircleIcon,
    XMarkIcon,
    FireIcon
} from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/20/solid'
import ToDo from '../components/Todo'
import MainNavigation from '../components/MainNavigation'



const navigation = [
    { name: 'Dashboard', href: '/profile', icon: UserCircleIcon, current: false },
    { name: 'Checklists', href: '/checklists', icon: FolderIcon, current: false },
    { name: 'Activity', href: '/profile', icon: FireIcon, current: false },
    { name: 'Stats', href: '/stats', icon: ChartBarSquareIcon, current: false },
]
const teams = [
    { id: 1, name: 'Recieving', href: '#', initial: 'R', current: false },
]
const trainers = [
    { id: 1, name: 'Crystal', href: '#', initial: 'C', current: false },
    { id: 2, name: 'Alex', href: '#', initial: 'A', current: false },
    { id: 3, name: 'Megan', href: '#', initial: 'M', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



export default function ProfilePage() {
    const data = useContext(AppContext);


    const dashboard = data.dashboardMenu;

    const [sidebarOpen, setSidebarOpen] = useState(false)
    // const [dashboard, setDashboard] = useState(true);
    const [checklists, setChecklists] = useState(false);
    
    const hideDash = (e:any) => {
        console.log('event to handle dashboard menu items');
    }

    console.log(data); 

    return (
        <>
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 xl:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                                <div className="flex h-16 shrink-0 ">
                                    <img
                                        alt="Your Company"
                                        src="/logo2.svg"
                                        className="h-28 w-auto"
                                    />
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="text-xs/6 font-semibold text-gray-400">Your team</div>
                                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                {teams.map((team) => (
                                                    <li key={team.name}>
                                                        <a
                                                            href={team.href}
                                                            className={classNames(
                                                                team.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                                {team.initial}
                                                            </span>
                                                            <span className="truncate">{team.name}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>

                                        </li>
                                        <li>
                                            <div className="text-xs/6 font-semibold text-gray-400">Your Trainers</div>
                                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                {trainers.map((trainer) => (
                                                    <li key={trainer.name}>
                                                        <a
                                                            href={trainer.href}
                                                            className={classNames(
                                                                trainer.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                                {trainer.initial}
                                                            </span>
                                                            <span className="truncate">{trainer.name}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>

                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/5">
                        <div className="flex h-16 shrink-0 ">
                            <img
                                alt="Your Company"
                                src="/logo2.svg"
                                className="h-32 w-auto"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-xs/6 font-semibold text-gray-400">Your team</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {teams.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                        {team.initial}
                                                    </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-xs/6 font-semibold text-gray-400">Your trainers</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {trainers.map((trainer) => (
                                            <li key={trainer.name}>
                                                <a
                                                    href={trainer.href}
                                                    className={classNames(
                                                        trainer.current
                                                            ? 'bg-gray-800 text-white'
                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                        {trainer.initial}
                                                    </span>
                                                    <span className="truncate">{trainer.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="xl:pl-72">
                    {/* Sticky search header */}
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-white xl:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-5" />
                        </button>

                    </div>

                    <main className="lg:pr-96">
                        <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                        {dashboard && <MainNavigation />}
                        {!dashboard && checklists && <h1>test</h1>}

                            {/* Sort dropdown */}
                            <Menu as="div" className="relative">
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Name
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Date updated
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Environment
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </header>
                    </main>


                    <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
                        <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                            <h2 className="text-base/7 font-semibold">To Do</h2>
                        </header>
                       
                            <ToDo />

               

                    </aside>
                </div>
            </div>
        </>
    )
}
