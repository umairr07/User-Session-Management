import React from "react";
import { useParams } from "react-router-dom";
import data from "../utils/data";

const UserSessionDetail = () => {
  const { userId, sessionId } = useParams();

  const user = data.users.find((u) => u.userId === userId);
  const session = data.sessions.find((s) => s._id === sessionId);

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Session Details</h2>
      <p>
        <strong>User Name:</strong> {user.firstname} {user.lastname}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Date of Birth:</strong> {user.dob}
      </p>
      <p>
        <strong>Session Title:</strong> {session.title}
      </p>
      <p>
        <strong>Description:</strong> {session.description}
      </p>
      <p>
        <strong>Mode:</strong> {session.mode}
      </p>
      <p>
        <strong>First Date:</strong>{" "}
        {new Date(session.firstDateTime).toLocaleString()}
      </p>
      <p>
        <strong>Second Date:</strong>{" "}
        {new Date(session.secondDateTime).toLocaleString()}
      </p>
    </div>
  );
};

export default UserSessionDetail;
