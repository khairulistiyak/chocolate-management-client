// ActiveLink.js (Fictional implementation)
import { Link, useLocation } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link to={to}>
      <div className={` ${isActive ? "bg-yellow-400" : ""}`}>{children}</div>
    </Link>
  );
};

export default ActiveLink;
