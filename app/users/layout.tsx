import Sidebar from "../(site)/components/sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UserList from "./UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = getUsers();
  return (
    // @ts-expect-error Sever Comopnents
    <Sidebar>
      <div className=" h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
