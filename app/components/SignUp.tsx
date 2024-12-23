'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function SignUp() {
    const router = useRouter();

    const departments = [
        'Receiving',
        'Shipping',
        'MCP',
        'Production',
        'IT',
    ];

    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState(departments[0]);


    const signup = "https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/sign-up"

    const handleSignup = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch(signup, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password, firstName, department }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('token', data.token); // Store the token
                localStorage.setItem('user', JSON.stringify(data.user)); // Store the user data
                router.push("/profile");
            } else {
                alert("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("An error occurred during login. Please try again later.");
        }
    };


    return (

        <>

            {/* signup form */}
            <form onSubmit={handleSignup} className="px-6 lg:px-8 lg:py-8 m-auto">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
                        <div>
                            <label htmlFor="username" className="block text-sm/6 font-semibold text-gray-900">
                                Username
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-blue sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                                Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-blue sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm/6 font-semibold text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first"
                                    name="first"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-blue sm:text-sm/6"
                                />
                            </div>
                        </div>
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

                    </div>
                    <div className="mt-8 flex justify-around">
                        <Link href="/" className="rounded-md bg-main-red px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Back
                        </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-main-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}