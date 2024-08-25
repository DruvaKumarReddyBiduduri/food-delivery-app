import { links } from "../../utils/constants";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <div className="w-full bg-[#222] mb-4 flex justify-between items-center p-2">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex items-center gap-2">
        {links.map((link, index) => (
          <NavItem key={index} path={link.path} label={link.label} />
        ))}
      </div>
    </div>
  );
}
