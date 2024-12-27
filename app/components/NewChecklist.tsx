'use client'
import { useState, useEffect } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function CreateChecklist() {

    const departments = [
        'Receiving',
        'Shipping',
        'MCP',
        'Production',
        'IT',
    ];
    const checklists = [
        'safety',
        'checklist2',
        'checklist3',
        'checklist4',
        'checklist5',
    ];

    const [assignedToUser, setSelectedUser] = useState('');
    const [users, setUsers] = useState<any[]>([]) // Initialize with an empty array
    const [department, setDepartment] = useState(departments[0]);
    const [checklistName, setChecklist] = useState(checklists[0]);
    const [trainer, setTrainer] = useState('');

    const newChecklist = "https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/create-checklist"

    const handleCreateChecklist = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const userString = localStorage.getItem('user');

        if (userString) {
            const user = JSON.parse(userString); // Parse the stored user object
            const userName = user.firstName;
            setTrainer(userName);

        }


        try {
            const response = await fetch(newChecklist, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify
                    ({
                        assignedToUser,
                        department,
                        checklistName,
                        trainer :trainer,
                    }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                // Handle successful response (e.g., display a success message)
                alert(data.message);
            } else {
                alert(data.message || "Request failed"); // Display a more specific error message

            }

        } catch (error) {
            console.error("error with creating checklist:", error);
            alert("An error occurred during checklist creation. Please try again later.");
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/get-users');
                const fetchedUsers = await response.json();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);


    return (

        <>

            {/* signup form */}
            <form onSubmit={handleCreateChecklist} className="px-6 lg:px-8 lg:py-8 m-auto">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 w-60">

                        <Listbox value={department} onChange={setDepartment}>
                            <Label className="block text-sm/6 font-medium text-gray-900">Department</Label>
                            <div className="relative">
                                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                    <span className="col-start-1 row-start-1 truncate pr-6">{department}</span>
                                    <ChevronUpDownIcon
                                        aria-hidden="true"
                                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </ListboxButton>

                                <ListboxOptions
                                    transition
                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                >
                                    {departments.map((department) => (
                                        <ListboxOption
                                            key={department}
                                            value={department}
                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                                        >
                                            <span className="block truncate font-normal group-data-[selected]:font-semibold">{department}</span>

                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                                <CheckIcon aria-hidden="true" className="size-5" />
                                            </span>
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </div>
                        </Listbox>
                        <Listbox value={checklistName} onChange={setChecklist}>
                            <Label className="block text-sm/6 font-medium text-gray-900">Checklist</Label>
                            <div className="relative">
                                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                    <span className="col-start-1 row-start-1 truncate pr-6">{checklistName}</span>
                                    <ChevronUpDownIcon
                                        aria-hidden="true"
                                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </ListboxButton>

                                <ListboxOptions
                                    transition
                                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                >
                                    {checklists.map((checklist) => (
                                        <ListboxOption
                                            key={checklist}
                                            value={checklist}
                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                                        >
                                            <span className="block truncate font-normal group-data-[selected]:font-semibold">{checklist}</span>

                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                                <CheckIcon aria-hidden="true" className="size-5" />
                                            </span>
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </div>
                        </Listbox>
                        {users.length > 0 && ( // Conditional rendering of the user Listbox
                            <Listbox value={assignedToUser} onChange={setSelectedUser}>
                                <Label className="block text-sm/6 font-medium text-gray-900">User</Label>
                                <div className="relative">
                                    <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        <span className="col-start-1 row-start-1 truncate pr-6">
                                            {assignedToUser && users.find((u) => u._id === assignedToUser)?.userName || 'No user selected'}
                                        </span>
                                        <ChevronUpDownIcon
                                            aria-hidden="true"
                                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </ListboxButton>

                                    <ListboxOptions
                                        transition
                                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                    >
                                        {users.map((user) => (
                                            <ListboxOption
                                                key={user._id} // Assuming your user data has an '_id' field
                                                value={user._id} // Use username as the option value
                                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                                            >
                                                <span className="block truncate font-normal group-data-[selected]:font-semibold">{user.userName}</span>
                                                {/* Display both firstName and username in the option */}
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                                    <CheckIcon aria-hidden="true" className="size-5" />
                                                </span>
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
                        )}


                    </div>

                    <div className="mt-8 flex justify-around md:pb-0 pb-4">
                        <button
                            type="submit"
                            className="rounded-md bg-main-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}