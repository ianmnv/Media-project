import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, usersData, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) {
    return <Skeleton times={5} />;
  }

  if (error) {
    return <div>Error occured fetching data</div>;
  }

  return <>{usersData.length}</>;
}

export default UsersList;
