'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function Login() {
    const router = useRouter();
    
    //     fetch('https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/users')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     // Do something with the data
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    let loginButton = (e:any) => {
        e.preventDefault();
            fetch('https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/login')
      .then(response => response.json())
      .then(data => {
        if(data.success === true){
            console.log(data.message);
            router.push('/profile');

        }else {
            console.log(data.message);
        }

        // Do something with the data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
    
    return (
        <>
            <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 m-auto">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                                Username
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"

                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-blue sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    autoComplete=""
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-blue sm:text-sm/6"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-8 flex justify-around">
                        <Link
                            href='/'
                            type="submit"
                            className="rounded-md bg-main-red px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Back
                        </Link>
                        <button
                            onClick={loginButton}
                            type="submit"
                            className="rounded-md bg-main-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-main-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}