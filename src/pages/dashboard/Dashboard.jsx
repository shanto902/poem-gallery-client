import { useEffect, useState } from "react";
import DashboardTitle from "../../components/DashboardTitle";
import useAuth from "../../hooks/useAuth";
import usePoems from "../../hooks/usePoems";
import Loading from "../../components/Loading";
import { BiBook } from "react-icons/bi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { user } = useAuth();
  const { poems, loading, error } = usePoems();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (poems.length > 0) {
      const userPoems = poems.filter(
        (poem) => poem?.author?.email === user.email
      );
      const groupedByDay = userPoems.reduce((acc, poem) => {
        const date = new Date(poem.createdAt).toLocaleDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});

      const chartData = Object.keys(groupedByDay).map((date) => ({
        date,
        count: groupedByDay[date],
      }));

      setData(chartData);
    }
  }, [poems, user.email]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <DashboardTitle>Dashboard</DashboardTitle>
      <div className="flex justify-center mx-auto text-white rounded-none shadow stats">
        <div className="rounded-none stat">
          <div className="stat-figure text-primary">
            <BiBook className="size-10" />
          </div>
          <div className="stat-title">Total Poems</div>
          <div className="stat-value text-primary">
            {poems.filter((poem) => poem?.author?.email === user.email).length}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="my-5 text-lg font-semibold">
          Poem Published Date Chart
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
