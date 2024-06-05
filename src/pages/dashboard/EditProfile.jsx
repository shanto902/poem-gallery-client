import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import DashboardTitle from "../../components/DashboardTitle";

export default function EditProfile() {
  const data = useLoaderData();
  console.log(data);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (e) => {
    const { name, age, mobileNumber, gender } = e;
    const userData = {
      name,
      age,
      mobileNumber,
      gender,
      email: data?.email,
    };
    fetch(`http://localhost:5000/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <DashboardTitle>Edit Profile</DashboardTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label htmlFor="">User Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            defaultValue={data?.name}
            className="px-1 py-2 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User email</label>
          <input
            type="text"
            value={data?.email}
            disabled
            name="email"
            className="px-1 py-2 bg-slate-50"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Gender</label>
          <select
            defaultValue={data?.gender}
            className="w-full max-w-xs px-1 py-2 select select-bordered bg-slate-50"
            {...register("gender", { required: true })}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="">User Age</label>
          <input
            {...register("age", { required: true })}
            type="number"
            name="age"
            defaultValue={data?.age}
            className="px-1 py-2 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">User Mobile</label>
          <input
            {...register("mobileNumber", { required: true })}
            type="text"
            name="mobileNumber"
            defaultValue={data?.mobileNumber}
            className="px-1 py-2 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value="Update Profile"
            className="px-1 py-2 text-white btn bg-slate-950"
          />
        </div>
      </form>
    </div>
  );
}
