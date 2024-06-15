import { Link, useLocation, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import GoogleLogin from "../components/provider/GoogleLogin";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col gap-10 hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="flex flex-col items-center justify-center flex-1 h-screen bg-gray-100">
              <h1 className="mb-6 text-3xl font-bold">
                Welcome to our digital gallery
              </h1>
              <p className="mb-8 text-lg text-center">
                Where words and images dance in harmony,
                <br />
                Upon this login page, a doorway to artistic reverie.
              </p>
              <p className="mb-4">
                Before you enter, take a moment to pause and see,
                <br />
                The wonders that await, both old and new, for you and me.
              </p>
              <p className="mb-4">
                With every login, a journey begins,
                <br />
                Through corridors of creativity, where inspiration spins.
              </p>
              <p className="mb-4">
                A canvas awaits your touch, a stage for your story to unfold,
                <br />
                In this virtual realm of dreams, where visions are bold.
              </p>

              <p className="mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  />
                </div>
                {errors.email && <span>This field is required</span>}
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

                <div className="mt-6 form-control">
                  <input
                    className="text-white bg-success btn"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div className="divider">OR</div>
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
