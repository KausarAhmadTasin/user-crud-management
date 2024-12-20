import Link from "next/link";
import "./Navbar.css";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Create User",
    path: "createUser",
  },
  {
    title: " All Users",
    path: "allUsers",
  },
];

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 bg-[#111827] z-40 py-4 md:py-6 select-none custom-navbar-shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold bg-gradient-to-r cursor-pointer from-indigo-400 via-purple-500 to-orange-500 text-transparent bg-clip-text active:scale-95">
            User Management
          </h1>
        </Link>
        <ul className="hidden md:flex justify-between items-center gap-8">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.path}>
              <li className="text-slate-200 text-lg font-medium hover:underline underline-offset-4">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
