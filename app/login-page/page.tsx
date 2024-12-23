
'use client'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Image from 'next/image'
import { useState } from 'react'
import { Field, Switch } from '@headlessui/react'

export default function LoginPage() {

  const [enabled, setEnabled] = useState(false)
  return (
    <div className="relative isolate h-screen">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>
            <div className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {!enabled ? (
                <Image
                  alt='login image'
                  height={2000}
                  width={2000}
                  className=' w-auto m-auto'
                  src="/login.svg"
                />
              ) : <Image
              alt='login image'
              height={2000}
              width={2000}
              className=' w-auto m-auto'
              src="/loginNew.svg"
            />}
            </div>

          </div>
        </div>
        <div className=' flex-col pt-10 md:pt-[50%] pb-10 w-2/3 m-auto h-full'>
          <Field className="flex items-center m-auto justify-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
              />
            </Switch>

          </Field>
          {!enabled ? (
            <Login />
          ) : <SignUp />}
        </div>
      </div>
    </div>
  )
}
