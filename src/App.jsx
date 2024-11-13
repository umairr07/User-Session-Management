import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSessionsTable from "./components/UserSessionsTable ";
import UserSessionDetail from "./components/UserSessionDetail";

const App = () => {
  return (
    <Router>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-6">Session Management</h1>
        <Routes>
          <Route path="/" element={<UserSessionsTable />} />
          <Route
            path="/details/:userId/:sessionId"
            element={<UserSessionDetail />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
