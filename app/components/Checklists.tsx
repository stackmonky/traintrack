import {useState, useEffect } from 'react'
// import { useContext } from 'react'
// import AppContext from '../context/appContext'
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import CreateChecklist from './NewChecklist'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CheckLists() {


  const [checklistOpen, setChecklistOpen] = useState(false);
  const [checklistsData, setChecklistsData] = useState();

  const usersApi = "https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/get-users";
  const checkListsUpdate = "https://0b23999f-2284-4048-8b14-45ba440d1afe-00-nyyrzp41cyfe.janeway.replit.dev/get-checklists";

  const getUsers = async () => {
    try {
      const response = await fetch(usersApi);

      if (!response.ok) {
        throw new Error(`Failed to fetch users. Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      return []; // Return empty array on error
    }
  };

  const openChecklist = async () => {
    if (checklistOpen) {
      setChecklistOpen(!checklistOpen);
    } else {
      setChecklistOpen(true);
      try {
        const fetchedUsers = await getUsers();
        // Use fetchedUsers here (e.g., display them in a list)
        console.log("Fetched users:", fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  };
  const refreshChecklists = async () => {
    const userString = localStorage.getItem('user'); 
    if (userString) {
      const user = JSON.parse(userString); // Parse the stored user object
      const userId = user.userId; 
  
      const checklistResponse = await fetch(checkListsUpdate, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userId }),
      });
  
      if (checklistResponse.ok) {
        const checklistItems = await checklistResponse.json();
        // Store the fetched checklists in state (if applicable)
        localStorage.setItem('checklists', JSON.stringify(checklistItems));
        setChecklistsData(checklistItems);

        // ... 
      } else {
        console.error('Error fetching checklists:', checklistResponse.status);
        // Handle the error (e.g., display an error message to the user)
      }
    } else {
      console.error("User data not found in localStorage."); 
    }
  };

  useEffect(() => {
    const checklists_data2 = localStorage.getItem('checklists');

    if (checklists_data2) {
      try {
        const parsedChecklists = JSON.parse(checklists_data2);
        setChecklistsData(parsedChecklists);
        console.log(parsedChecklists);
      } catch (error) {
        console.error("Error parsing checklists data:", error);
      }
    } else {
      console.log("No checklists found in localStorage.");
    }
  }, []); // Empty dependency array to run only once after mount

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Checklists</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users checklists
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex">
          <button
            type="button"
            onClick={refreshChecklists}
            className='size-6 m-auto mr-8 text-green-500'
          >
            <ArrowPathIcon />
          </button>
          <button
            type="button"
            onClick={openChecklist}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            New Checklist
          </button>

          {checklistOpen ? (
            <div className='md:absolute md:right-[400px] md:top-[110px] bg-gray-300 rounded mt-4 '>
              <CreateChecklist />
            </div>
          ) : null
          }
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Department
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Trainer
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {checklistsData && checklistsData.map((checklist: any) => (
                   <tr key={checklist._id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {checklist.checklistName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{checklist.department}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                    
                  </tr> 
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}