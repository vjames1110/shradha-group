import { useEffect, useState } from "react";

import { Menu, X, ChevronDown } from "lucide-react";

import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/icons/SGLogoRmv.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `
    relative
    text-sm
    uppercase
    tracking-wide
    transition-all
    duration-300
    hover:text-primary
    ${isActive ? "text-primary" : isScrolled ? "text-black" : "text-white"}
  `;

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-black/5"
              : "bg-black/10 backdrop-blur-sm"
          }
        `}
      >
        <div
          className="
    container-custom
    h-24
    flex
    items-center
    justify-between
  "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="
    flex
    items-center
    gap-4
    shrink-0
    z-50
  "
          >
            <img
              src={logo}
              alt="Shradha Group"
              className="
      h-14
      sm:h-16
      lg:h-20
      w-auto
      object-contain
      brightness-110
      contrast-125
      saturate-125
    "
            />

            <div className="hidden sm:block">
  <h1
    className={`
      text-xl
      md:text-2xl
      lg:text-[1.75 rem]
      font-semibold
      uppercase
      tracking-wider
      transition-colors
      duration-300
      ${isScrolled ? "text-black" : "text-white"}
    `}
  >
    SHRADHA GROUP
  </h1>
</div>
          </Link>

          {/* DESKTOP NAV */}
          <div
            className="
    hidden
    lg:flex
    items-center
    ml-auto
    gap-16
  "
          >
            {/* NAVIGATION */}
            <nav
              className="
      flex
      items-center
      gap-12
    "
            >
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              {/* DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`
          flex
          items-center
          gap-2
          text-sm
          uppercase
          tracking-wide
          transition-colors
          hover:text-primary
          ${isScrolled ? "text-black" : "text-white"}
        `}
                >
                  Businesses
                  <ChevronDown size={16} />
                </button>

                <div
                  className={`
          absolute
          top-full
          left-1/2
          -transform-x-1/2
          mt-5
          w-[300px]
          bg-white
          rounded-[24px]
          shadow-2xl
          border
          border-black/5
          overflow-hidden
          transition-all
          duration-300
          ${
            dropdownOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }
        `}
                >
                  <div className="p-4">
                    {[
                      {
                        name: "Hydraulic Systems",
                        link: "/business/hydraulics",
                      },

                      {
                        name: "Steel Trading",
                        link: "/business/steel-trading",
                      },

                      {
                        name: "Engineering Works",
                        link: "/business/engineering-works",
                      },

                      {
                        name: "Transport Services",
                        link: "/business/transport",
                      },

                      {
                        name: "Cattle Feed Supply",
                        link: "/business/cattle-feed",
                      },
                    ].map((item) => (
                      <Link
                        key={item.link}
                        to={item.link}
                        className="
                block
                px-5
                py-4
                rounded-2xl
                hover:bg-[#f8f6f2]
                transition-all
              "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* CTA */}
            <Link
              to="/contact"
              className="
      px-7
      py-4
      rounded-full
      bg-primary
      text-black
      font-medium
      hover:scale-105
      transition-all
      duration-300
      shadow-lg
    "
            >
              Get In Touch
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`
              lg:hidden
              relative
              z-50
              ml-auto
              transition-colors
              duration-300
              ${isScrolled ? "text-black" : "text-white"}
            `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[320px]
          bg-white
          z-40
          shadow-2xl
          transition-transform
          duration-500
          lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
          className="
            flex
            flex-col
            pt-32
            px-8
            gap-8
          "
        >
          <NavLink to="/" className="text-xl" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/business/hydraulics"
            className="text-xl"
            onClick={() => setIsOpen(false)}
          >
            Businesses
          </NavLink>

          <NavLink
            to="/contact"
            className="text-xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/40
            z-30
            lg:hidden
          "
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
