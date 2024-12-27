'use client'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, useState } from "react";

export default function Checklist() {

    const [updateChecklist, setUpdatedChecklist] = useState({
        completed:false,
    });

    const checklist = localStorage.getItem('checkListView');
    const parsedChecklist = checklist && JSON.parse(checklist);
    console.log(parsedChecklist.tasks);

    const handleUpdate = (e: any) => {
        e.preventDefault();
        console.log('form submit');
    }

    const handleTaskChange = (taskId: Key | null | undefined, field: string, value: boolean) => {

    };
    return (
        <>
            <div className="flex-col  w-full ">
                <h1 className="text-2xl font-bold mb-4 mt-4 text-center">
                    {parsedChecklist.checklistName} checklist
                </h1>
                <form onSubmit={handleUpdate} className="space-y-4 w-full">
                    {parsedChecklist.tasks.map((task: any) => (
                        <div key={task._id} className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold mb-2">{task.taskName}</h2>
                            <p className="text-gray-700 mb-4">{task.taskDescription}</p>
                            <div className="flex items-center mb-2">
                                <label className="mr-2">Completed:</label>
                                {!task.isCompleted ? 
                                    <input
                                        type="checkbox"
                                        checked={task.isCompleted}
                                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    /> : <input
                                    type="checkbox"
                                    checked={true}
                                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                    }
                            </div>
                            <div className="flex items-center mb-2">
                                <label className="mr-2">Trainer Signed:</label>
                                {!task.trainerSigned ? 
                                    <input
                                        type="checkbox"
                                        checked={task.trainerSigned}
                                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    /> : <input
                                    type="checkbox"
                                    checked={true}
                                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                    }
                            </div>
                        </div>
                    ))}
                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update Checklist
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}