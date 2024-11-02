import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, usersData, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={5} className="h-10 w-full" />;
  }

  if (error) {
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
        <Button onClick={() => dispatch(addUser())}>+ Add User</Button>
      </div>
      {renderUsers}
    </>
  );
}

export default UsersList;
