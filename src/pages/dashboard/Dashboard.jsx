import DashboardTitle from "../../components/DashboardTitle";
import useAuth from "../../hooks/useAuth";
import usePoems from "../../hooks/usePoems";
import Loading from "../../components/Loading";
import { BiBook } from "react-icons/bi";

const Dashboard = () => {
  const { user } = useAuth();

  const { poems, loading, error } = usePoems();

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <DashboardTitle>Dashboard</DashboardTitle>
      <div className="flex justify-center mx-auto shadow stats">
        <div className="stat">
          <div className="stat-figure text-primary">
            <BiBook className="size-10" />
          </div>
          <div className="stat-title">Total Poems</div>
          <div className="stat-value text-primary">
            {poems.filter((poem) => poem?.author?.email === user.email).length}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiBook />
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
