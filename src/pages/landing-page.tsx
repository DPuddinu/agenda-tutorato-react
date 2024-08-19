import { Link } from "react-router-dom";

export const LandingPage = () => (
  <nav>
    <Link to="/appointments">Dashboard</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  </nav>
);