import DashboardTitle from "../../components/DashboardTitle";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <DashboardTitle>Profile</DashboardTitle>

      <h2>Name : {user.displayName} </h2>
      <img src={user.photoURL} alt="" />
    </>
  );
};

export default Profile;
