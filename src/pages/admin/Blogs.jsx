import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  const blockUser = async (id) => {
    await api.post(`/admin/block/${id}`);
    setUsers(users.map(u => u.id === id ? { ...u, isBlocked: true } : u));
  };

  const unblockUser = async (id) => {
    await api.post(`/admin/unblock/${id}`);
    setUsers(users.map(u => u.id === id ? { ...u, isBlocked: false } : u));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b text-center">
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">
                {u.isBlocked ? "Blocked" : "Active"}
              </td>
              <td className="p-2">
                {u.isBlocked ? (
                  <button
                    onClick={() => unblockUser(u.id)}
                    className="text-green-600"
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    onClick={() => blockUser(u.id)}
                    className="text-red-600"
                  >
                    Block
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
