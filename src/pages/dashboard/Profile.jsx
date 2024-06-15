import { Link } from "react-router-dom";
import DashboardTitle from "../../components/DashboardTitle";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  return (
    <>
      <DashboardTitle>Profile</DashboardTitle>

      <div className="flex flex-col-reverse items-center justify-between h-[50vh] mt-10 md:flex-row">
        <div className="space-y-2 ">
          <h2 className="text-xl font-bold ">Name : {userInfo?.name} </h2>

          <h2 className="text-xl ">Age : {userInfo?.age} </h2>

          <h2 className="text-xl ">Mobile No : {userInfo?.mobileNumber} </h2>
          <h2 className="text-xl capitalize">Gender : {userInfo?.gender} </h2>
          <h2 className="text-xl ">Address : {userInfo?.address} </h2>
        </div>
        <div>
          <div className="avatar">
            <div className="w-40 rounded">
              <img
                src={
                  userInfo?.imageURL
                    ? userInfo?.imageURL
                    : "https://avatar.iran.liara.run/public"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="mx-auto mt-10 btn btn-outline btn-md"
        >
          Edit Profile
        </Link>
      </div>
    </>
  );
};

export default Profile;
