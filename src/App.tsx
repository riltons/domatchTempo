import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import RootLayout from "./routes/layout";
import AuthLayout from "./routes/auth/layout";
import LoginPage from "./routes/auth/login";
import RegisterPage from "./routes/auth/register";
import HomePage from "./routes/index";
import CommunitiesPage from "./routes/communities";
import ProfilePage from "./routes/profile";
import SettingsPage from "./routes/settings";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
