import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import DataList from "./components/DataList";
import {
  createUser,
  deleteUserById,
  getUserList,
  updateUserById,
} from "./services/userService";

function App() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [userList, setUserList] = useState([]);
  // const [userList, setUserList] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(userList));
  // }, [userList]);

  const loadUsers = async () => {
    const res = await getUserList();
    setUserList(res.data.users);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    createUser({ name }).then(() => loadUsers());
    setName("");
  };

  // const addUser = (e) => {
  // e.preventDefault();
  //   if (!name.trim()) return;
  //   const newUser = {
  //     name: name,
  //     _id: Date.now(),
  //   };
  //   setUserList([...userList, newUser]);
  //   setName("");
  // };

  // const deleteUser = (id) => {
  //   setUserList((prev) => prev.filter((userItem) => userItem._id !== id));
  // };

  const deleteUser = (id) => {
    deleteUserById(id).then(() => loadUsers());
  };
  const editUser = (data) => {
    setIsEditing(true);
    setName(data.userItem.name);
    setUserId(data.userItem._id);
  };

  const updateUser = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    updateUserById(userId, { name }).then(() => loadUsers());
    setName("");
    setUserId("");
    setIsEditing(false);
  };

  // const updateUser = (e) => {
  //   e.preventDefault();
  //   if (!name.trim()) return;
  //   setUserList((prev) =>
  //     prev.map((userItem) =>
  //       userItem._id == userId ? { ...userItem, name } : userItem
  //     )
  //   );
  //   setName("");
  //   setUserId("");
  //   setIsEditing(false);
  // };

  return (
    <>
      <h2 className="text-xl text-center">User Crud</h2>
      <Form
        name={name}
        setName={setName}
        isEditing={isEditing}
        onSubmit={isEditing ? updateUser : addUser}
      />

      <DataList
        userList={userList}
        isEditing={isEditing}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </>
  );
}

export default App;
