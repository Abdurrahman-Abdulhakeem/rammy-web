import Link from "next/link";

export const NavLinks = [
  {
    path: "/about",
    title: "ABOUT",
  },
  {
    path: "/#contact",
    title: "CONTACT",
  },
  {
    path: "/blog",
    title: "BLOG",
  },
];

const Navbar = () => {
  return (
    <header className="flex items-center justify-end px-10 h-16 mx-auto">
      <div className="space-x-5">
        {NavLinks.map((nav) => (
          <Link href={nav.path} key={nav.path} className="font-bold text-lg hover:text-gray-400 transition">
            {" "}
            {nav.title}{" "}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
