import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Clientlist from "./components/dashboard/client/clientlist";
import Plans from "./components/dashboard/plans/plans";
import ProfilePage from "./ClientScreens/Profilepage/Profilepage";
import DashboardClient from "./ClientScreens/DashBoard/Dashboard";
import LandingPage from "./ClientScreens/LandingPage/LandingPage";
import PlansCl from "./ClientScreens/Plans/PlansCl";
import AdvClView from "./ClientScreens/AdvisersClientView/AdvClView";
import AdvClProfile from "./ClientScreens/AdvisersClientView/AdvClProfile";
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
          <Route path="/cldash" element={<DashboardClient />} />
          <Route path="/advisor_id/:advisor_id" element={<AdvClProfile />} />
          <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/planscl" element={<PlansCl/>} />
             <Route path="/viewadvi" element={<AdvClView/>} /> 
           {/* <Route path="/queries" element={<Queries/>} /> */}
            <Route path="/plan" element={<Plans/>} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
