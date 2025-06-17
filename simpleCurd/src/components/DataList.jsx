import React from "react";
import Button from "./Button";

function DataList({ userList, isEditing, deleteUser, editUser }) {
  return (
    // <div className="flex flex-col items-center w-full">
    //   <div className="w-full max-w-md">
    //     {userList &&
    //       userList.map((userItem, index) => (
    //         <div
    //           key={userItem._id}
    //           className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-3 my-2 shadow-sm hover:shadow-md transition-shadow"
    //         >
    //           <p className="text-gray-800 font-medium">
    //             {index + 1}. {userItem.name}
    //           </p>
    //           <div className="flex items-center space-x-3">
    // <Button
    //   disabled={isEditing}
    //   className="disabled:text-gray-400  text-red-500 hover:text-red-600 transition-colors"
    //   type="button"
    //   onClick={() => deleteUser(userItem._id)}
    //   title="Delete"
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     strokeWidth="1.5"
    //     stroke="currentColor"
    //     className="w-6 h-6"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    //     />
    //   </svg>
    // </Button>
    // <Button
    //   className=" text-blue-500 hover:text-blue-600 transition-colors"
    //   onClick={() => editUser({ userItem })}
    //   title="Edit"
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     strokeWidth="1.5"
    //     stroke="currentColor"
    //     className="w-6 h-6"
    //   >
    //     <path
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    //     />
    //   </svg>
    // </Button>
    //           </div>
    //         </div>
    //       ))}
    //     {!userList.length && (
    //       <p className="text-center text-gray-800 font-medium">No Entries.</p>
    //     )}
    //   </div>
    // </div>

    <div className=" w-full">
      <div className="w-full">
        {userList.length > 0 ? (
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4 border text-left">#</th>
                <th className="py-2 px-4 border text-left">Name</th>
                <th className="py-2 px-4 border text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((userItem, index) => (
                <tr key={userItem._id} className="hover:bg-gray-200">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{userItem.name}</td>
                  <td className="py-2 px-4 border">
                    <div className="flex space-x-3">
                      <Button
                        disabled={isEditing}
                        className="disabled:text-gray-400  text-red-500 hover:text-red-600 transition-colors"
                        type="button"
                        onClick={() => deleteUser(userItem._id)}
                        title="Delete"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </Button>
                      <Button
                        className=" text-blue-500 hover:text-blue-600 transition-colors"
                        onClick={() => editUser({ userItem })}
                        title="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-800 font-medium">No Entries.</p>
        )}
      </div>
    </div>
  );
}

export default DataList;
