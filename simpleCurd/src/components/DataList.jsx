import React from "react";
import Button from "./Button";

function DataList({ loader, userList, isEditing, deleteUser, editUser }) {
  return loader ? (
    <div className="w-full flex flex-col justify-center items-center h-64 space-y-4">
      <div class="flex flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  ) : userList?.length > 0 ? (
    <div className="w-full overflow-x-auto px-2">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="py-2 px-4 border text-left">#</th>
            <th className="py-2 px-4 border text-left">Name</th>
            <th className="py-2 px-4 border text-left">Phone</th>
            <th className="py-2 px-4 border text-left">Location</th>
            <th className="py-2 px-4 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((userItem, index) => (
            <tr key={userItem._id} className="hover:bg-gray-200">
              <td className="py-2 px-4 border border-gray-400 ">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-400 ">{userItem.name}</td>
              <td className="py-2 px-4 border border-gray-400 ">{userItem.phone}</td>
              <td className="py-2 px-4 border border-gray-400 ">{userItem.location}</td>
              <td className="py-2 px-4 border border-gray-400 ">
                <div className="flex space-x-3">
                  <Button
                    disabled={isEditing}
                    className="disabled:text-gray-400 text-red-500 hover:text-red-600 transition-colors"
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
                    className="text-blue-500 hover:text-blue-600 transition-colors"
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
    </div>
  ) : (
    <p className="text-center text-gray-800 font-medium">No Entries.</p>
  );
}

export default DataList;
