import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
import Home from "./Pages/Home";
import SerenityAI from "./Component/LandingPage/LandingPage";
import ProtectedRoute from "./Component/ProtectedRoute";
import MainApp from "./Component/MainApp/MainApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route -> Landing page */}
        <Route path="/" element={<Navigate to="/landing" replace />} />

        <Route path="/landing" element={<SerenityAI />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/app/*" element={<MainApp />} />

        {/* Catch-all -> redirect to landing */}
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
