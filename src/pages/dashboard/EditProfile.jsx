import { useForm } from "react-hook-form";
import { useNavigate, useLoaderData } from "react-router-dom";
import DashboardTitle from "../../components/DashboardTitle";

export default function EditProfile() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const { name, age, mobileNumber, gender, address } = formData;
    const userData = {
      name,
      age,
      mobileNumber,
      gender,
      address,
      email: data?.email,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_url}/user/${data?.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      await response.json();

      navigate("/dashboard/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <DashboardTitle>Edit Profile</DashboardTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="name">User Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            defaultValue={data?.name}
            className="px-1 py-2 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">User Email</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="px-1 py-2 bg-slate-50"
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <label htmlFor="gender">Gender</label>
          <select
            defaultValue={data?.gender}
            className="w-full max-w-xs px-1 py-2 rounded-none select select-bordered bg-slate-50"
            {...register("gender", { required: true })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="age">Age</label>
          <input
            {...register("age", { required: true })}
            type="number"
            name="age"
            defaultValue={data?.age}
            className="w-full px-1 py-2 bg-slate-50"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="mobileNumber">Mobile</label>
          <input
            {...register("mobileNumber", { required: true })}
            type="text"
            name="mobileNumber"
            defaultValue={data?.mobileNumber}
            className="px-1 py-2 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address">Address</label>
          <input
            {...register("address", { required: true })}
            type="text"
            name="address"
            defaultValue={data?.address}
            className="px-1 py-2 bg-slate-50"
          />
        </div>
        <div className="flex flex-row self-center gap-5">
          <input
            type="submit"
            value="Update Profile"
            className="py-2 text-white rounded-none btn-success btn w-fit btn-md"
          />
          <input
            onClick={() => {
              navigate("/dashboard/profile");
            }}
            type="button"
            value="Cancel"
            className="py-2 text-white rounded-none btn-error btn w-fit btn-md"
          />
        </div>
      </form>
    </div>
  );
}
