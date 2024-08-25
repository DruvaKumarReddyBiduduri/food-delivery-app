import { Link } from "react-router-dom";

export default function NavItem({ path, label }) {
  return (
    <Link
      className="w-[100px] h-[30px] flex items-center justify-center p-2 rounded hover:bg-white hover:border-black hover:text-black"
      to={path}
    >
      {label}
    </Link>
  );
}
