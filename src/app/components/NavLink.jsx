import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
      <Link
          href={href}
          className="text-sm text-white hover:text-orange-400 px-2 py-1 rounded"
      >
        {title}
      </Link>
  );
};

export default NavLink;
