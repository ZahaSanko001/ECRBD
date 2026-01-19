import React from 'react';
import api from '../../api/axios';

const Dashboard = () => {
  const [stats, setStats] = React.useState({
    totalUsers: 0,
    blockedUsers: 0,
    totalBlogs: 0
  });

  React.useEffect(() => {
    api.get("/admin/stats").then(res => {
      setStats(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded shadow">Total Users: {stats.totalUsers}</div>
        <div className="p-4 rounded shadow">Blogs: {stats.totalBlogs}</div>
        <div className="p-4 rounded shadow">Blocked Users: {stats.blockedUsers}</div>
      </div>
    </div>
  );
}

export default Dashboard;
