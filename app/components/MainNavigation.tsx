import AppContext from '../context/appContext';
import { useContext } from 'react'


import {
    AcademicCapIcon,
    BookOpenIcon,
    CalendarIcon,
    FolderIcon,
    PencilIcon,
    ChartBarIcon,
  } from '@heroicons/react/24/outline'
  
  const pages = [
    {
      id:1,
      title: 'View Checklists',
   
      icon: FolderIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
      description: 'Track your progress with interactive checklists. See completed, ongoing, and overdue tasks.'
    },
    {
      id:1,
      title: 'View my Stats',
     
      icon: ChartBarIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
      description: 'Understand your training journey. Analyze your performance metrics, identify strengths, and areas for improvement.'
    },
    {
      id:1,
      title: 'Resources',

      icon: BookOpenIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
      description: 'Access a library of helpful resources, including guides, tutorials, and articles to support your learning.'
    },
    {
      id:1,
      title: 'Calendar',

      icon: CalendarIcon,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
      description: 'Stay organized with a personalized training calendar. View upcoming deadlines and schedule your learning.'
    },
    {
      id:1,
      title: 'Certificates',
   
      icon: AcademicCapIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
      description: 'View and download your earned certificates. Showcase your accomplishments and qualifications.'
    },
    {
      id:1,
      title: 'Application Feedback',
    
      icon: PencilIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
      description: 'Help us improve your learning experience. Share your feedback and suggestions for the training platform.'
    },
  ];
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  
  export default function MainNavigation() {

    const data = useContext(AppContext);

    const showChecklistPage = (e: React.MouseEventHandler<HT>) => {
      e.preventDefault();
      console.log(e.target.id);
      // console.log('event to handle dashboard menu items');
  }

    console.log(data, 'main navigation state');

    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {pages.map((page, pageIdx) => (
          <p
          id={page.id}
          onClick={showChecklistPage}
            key={page.title}
            className={classNames(
              pageIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              pageIdx === 1 ? 'sm:rounded-tr-lg' : '',
              pageIdx === pages.length - 2 ? 'sm:rounded-bl-lg' : '',
              pageIdx === pages.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
            )}
          >
            <div>
              <span
                className={classNames(
                  page.iconBackground,
                  page.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white',
                )}
              >
                <page.icon aria-hidden="true" className="size-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold text-gray-900">
                <p className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {page.title}
                </p>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {page.description}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="size-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </p>
        ))}
      </div>
    )
  }
  