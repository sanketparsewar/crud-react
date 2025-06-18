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
import Toast, { notifySuccess } from "./components/Toast";

function App() {
  const initialValue = {
    _id: "",
    name: "",
    phone: "",
    location: "",
  };
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  const [userList, setUserList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const loadUsers = async () => {
    const res = await getUserList();
    if (res.status !== 200) {
      handleError(res);
      return;
    }
    setLoader(false);
    setUserList(res.data.users);
  };

  useEffect(() => {
    setLoader(true);
    loadUsers();
  }, []);

  const handleError = (err) => {
    setError(err.response?.data?.message || "Something went wrong");
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const addUser = (e) => {
    e.preventDefault();
    createUser(user)
      .then((res) => {
        setLoader(true);
        loadUsers();
        notifySuccess(res.data.message);
        setUser(initialValue);
      })
      .catch((err) => {
        setLoader(false);
        handleError(err);
      });
  };

  const deleteUser = (id) => {
    deleteUserById(id).then((res) => {
      notifySuccess(res.data.message);
      setLoader(true);
      loadUsers();
    });
  };
  const editUser = (data) => {
    setIsEditing(true);
    setUser(data.userItem);
  };

  const updateUser = (e) => {
    e.preventDefault();
    updateUserById(user._id, user)
      .then((res) => {
        setLoader(true);
        loadUsers();
        notifySuccess(res.data.message);
        setUser(initialValue);
        setIsEditing(false);
      })
      .catch((err) => {
        setLoader(false);
        handleError(err);
      });
  };

  return (
    <>
      <Toast />
      <Form
        user={user}
        error={error}
        setUser={setUser}
        isEditing={isEditing}
        onSubmit={isEditing ? updateUser : addUser}
      />

      <DataList
        loader={loader}
        userList={userList}
        isEditing={isEditing}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </>
  );
}

export default App;
