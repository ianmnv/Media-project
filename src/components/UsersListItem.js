import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk";
import Button from "./Button";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className="mr-3" onClick={() => doRemoveUser(user)}>
            {GoTrashcan}
          </Button>
          {error && <p>Error deleting user</p>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
