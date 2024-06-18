import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import AssetInformation from "./pages/AssetInformation";
import InvestorDashboard from "./pages/InvestorDashboard";
import Documents from "./pages/Documents";
import OwnerDashboard from "./pages/OwnerDashboard";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Portfolio from "./pages/Portfolio";
import Offerings from "./pages/Offerings";
import ResetPassword from "./pages/ResetPassword";
import Wallet from "./pages/Wallet";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/asset-information":
        title = "";
        metaDescription = "";
        break;
      case "/investor-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/documents":
        title = "";
        metaDescription = "";
        break;
      case "/owner-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/portfolio":
        title = "";
        metaDescription = "";
        break;
      case "/offerings":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/wallet":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/asset-information" element={<AssetInformation />} />
      <Route path="/investor-dashboard" element={<InvestorDashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/owner-dashboard" element={<OwnerDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/offerings" element={<Offerings />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}
export default App;
