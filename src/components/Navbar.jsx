import { AlignJustify } from "lucide-react";
import companyLogo from "../assets/Frame.svg";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import vietnam from "../assets/Group11.png";

const navLinks = [
  {
    ref: "Home",
    refLink: "#",
  },
  {
    ref: "Category",
    refLink: "#",
  },
  {
    ref: "About",
    refLink: "#",
  },
  {
    ref: "Contact",
    refLink: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar absolute  w-full top-0 py-4 px-8 flex items-center justify-between">
      <AlignJustify className="lg:hidden" />
      <img src={companyLogo} alt="logo" className="" />
      <menu className="navLinks  hidden lg:flex items-center gap-[3rem] px-4">
        {navLinks.map((link) => (
          <Link to={link.refLink} key={link.ref}>
            {link.ref}
          </Link>
        ))}
      </menu>
      <Search className="lg:hidden" />
      <div className="searchBox hidden lg:flex gap-2 rounded-full bg-white py-2 px-9 ">
        <button>
          <Search className="text-[3px] text-stone-600" />
        </button>
        <input
          type="text"
          className="input_field rounded-full bg-transparent text-[.9rem] focus:border-none focus:outline-none px-2"
          placeholder="search something here!"
        />
      </div>
      <Link
        to={"#"}
        className="hidden lg:flex bg-[var(--second-color)] text-white py-2 px-5 rounded-full"
      >
        Join The Community
      </Link>
      <select
        name="country"
        id="country"
        className="bg-transparent hidden lg:flex"
      >
        <option value="VND">
          {" "}
          <img src={vietnam} alt="" /> VND
        </option>
      </select>
    </nav>
  );
};

export default Navbar;
