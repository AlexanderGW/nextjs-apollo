import GetUser from '../Components/GetUser';
import ActiveUsers from '../Components/ActiveUsers';
import CreateUser from '../Components/CreateUser';

export default function Home() {
  return (
    <>
      <GetUser />
      <ActiveUsers />
      <CreateUser />
    </>
  );
}
