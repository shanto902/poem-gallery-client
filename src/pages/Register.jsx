import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../components/provider/GoogleLogin";
import { useForm } from "react-hook-form";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setPassMatch(false);
    }

    if (password === confirmPassword) {
      await createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
          };
          fetch(`${import.meta.env.VITE_url}/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          }).then((res) => res.json());
        }
      });

      navigate(from);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen hero bg-base-200"
    >
      <div className="flex-col gap-10 hero-content lg:flex-row-reverse">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 text-2xl font-bold">
            Upon this registration page, a new chapter begins,
          </h1>
          <p className="py-2">
            Where dreams take flight, and adventure beckons.
          </p>
          <p className="py-2">
            Enter your details, like seeds in fertile ground,
          </p>
          <p className="py-2">
            To sow the fields of possibility, where wonders abound.
          </p>
          <p className="py-2">With each keystroke, a promise blooms,</p>
          <p className="py-2">Of connections made and futures groomed.</p>
          <p className="py-2">
            In this digital tapestry, you'll find your place,
          </p>
          <p className="py-2">A canvas awaiting your unique embrace.</p>
          <p className="py-2">So register now, and join our fold,</p>
          <p className="py-2">Where stories unfold and destinies are told.</p>
        </div>
        <div className="flex-1 w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="name"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                name="confirmPassword"
                required
              />
              {errors.confirmPassword && <span>This field is required</span>}
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}
            <div className="mt-6 form-control">
              <input
                className="text-white bg-success btn"
                type="submit"
                value="Register"
              />
            </div>
            <div className="divider">OR</div>

            <GoogleLogin />

            <div className="mt-6">
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-red-500 btn-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
