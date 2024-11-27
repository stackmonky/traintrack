import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

const trainingChecklists = [
    {
        id: 1,
        name: 'Checklist',
        imageUrl: '/favicon.ico',
        lastUpdated: 'December 13, 2022',
        status: 'Overdue',
    },
    {
        id: 2,
        name: 'Checklist',
        imageUrl: '/favicon.ico',
        lastUpdated: 'January 22, 2023',
        status: 'In progress',
    },
    {
        id: 3,
        name: 'Checklist',
        imageUrl: '/favicon.ico',
        lastUpdated: 'January 23, 2023',
        status: 'Completed',
    },
    {
        id: 4,
        name: 'Checklist',
        imageUrl: '/favicon.ico',
        lastUpdated: 'January 23, 2023',
        status: 'Completed',
    },
    {
        id: 5,
        name: 'Checklist',
        imageUrl: '/favicon.ico',
        lastUpdated: 'January 23, 2023',
        status: 'Completed',
    },
];
// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }

export default function ToDo() {
    return (
        <ul role="list" className="grid grid-cols-1 lg:grid-cols-1">
            {trainingChecklists.map((checklist) => (
                <li key={checklist.id} className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                        <img
                            alt={checklist.name}
                            src={checklist.imageUrl}
                            className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                        />
                        <div className="text-sm/6 font-medium text-gray-900">{checklist.name}</div>
                        <Menu as="div" className="relative ml-auto">
                            <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Open options</span>
                                <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        href="#"
                                        className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                    >
                                        View<span className="sr-only">, {checklist.name}</span>
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt className="text-gray-500">Date</dt>
                            <dd className="text-gray-700">
                                <time dateTime={checklist.lastUpdated}>{checklist.lastUpdated}</time>
                            </dd>
                        </div>
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt className="text-gray-500">Status</dt>
                            <dd className="flex items-start gap-x-2">
                                <div className={`font-medium ${checklist.status === 'Overdue'
                                        ? 'text-red-500'
                                        : checklist.status === 'Completed'
                                            ? 'text-green-500'
                                            : 'text-yellow-500'
                                    }`}>
                                    {checklist.status}
                                </div>
                            </dd>
                        </div>
                    </dl>
                </li>
            ))}
        </ul>
    )
}
