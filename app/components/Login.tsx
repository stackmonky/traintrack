'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = "https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/login"

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch(login, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
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

            <form onSubmit={handleSubmit} className="px-6 lg:px-8 lg:py-8 m-auto">
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