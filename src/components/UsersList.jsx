import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers, addUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList() {
  const [doGetUsers, isLoadingUsers, loadingUsersError] = useThunk(getUsers);
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { usersData } = useSelector((state) => state.user);

  useEffect(() => {
    doGetUsers();
  }, [doGetUsers]);

  if (isLoadingUsers) {
    return <Skeleton times={5} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error occured fetching data</div>;
  }

  const renderUsers = usersData.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={() => doAddUser()}>+ Add User</Button>
        )}
        {creatingUserError && "Error creating user..."}
      </div>
      {renderUsers}
    </>
  );
}

export default UsersList;
