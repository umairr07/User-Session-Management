import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../utils/data";

const UserSessionsTable = () => {
  const navigate = useNavigate();
  const [registeredSessions, setRegisteredSessions] = useState([
    {
      _id: "6733a143b5436d0dba8d2e08",
      sessionId: "672df039f84683cb1c9976fc",
      userId: "6728dffa2f06024a5952c547",
    },
    {
      _id: "6733a143b5436d0dba8d2e09",
      sessionId: "672df039f84683cb1c9976fc",
      userId: "6728dffa2f06024a5952c548",
    },
    {
      _id: "6733a143b5436d0dba8d2e0a",
      sessionId: "672df039f84683cb1c9976fd",
      userId: "6728dffa2f06024a5952c549",
    },
  ]);

  const handleView = (userId, sessionId) => {
    navigate(`/details/${userId}/${sessionId}`);
  };

  const handleDelete = (registrationId) => {
    const updatedSessions = registeredSessions.filter(
      (registration) => registration._id !== registrationId
    );
    setRegisteredSessions(updatedSessions);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">User Sessions Table</h2>
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border-b">User Name</th>
            <th className="p-2 border-b">Session Title</th>
            <th className="p-2 border-b">Mode</th>
            <th className="p-2 border-b">First Date</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registeredSessions.map((registration) => {
            const user = data.users.find(
              (u) => u.userId === registration.userId
            );
            const session = data.sessions.find(
              (s) => s._id === registration.sessionId
            );

            return (
              <tr key={registration._id} className="border-t">
                <td className="p-2">
                  {user.firstname} {user.lastname}
                </td>
                <td className="p-2">{session.title}</td>
                <td className="p-2">{session.mode}</td>
                <td className="p-2">
                  {new Date(session.firstDateTime).toLocaleString()}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleView(user.userId, session._id)}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(registration._id)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserSessionsTable;
