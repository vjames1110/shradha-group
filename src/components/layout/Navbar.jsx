import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/icons/SG.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = () =>
    `
    relative
    text-sm
    uppercase
    tracking-[2px]
    font-medium
    transition-all
    duration-300
    text-[#318da8]
    hover:text-[#318da8]
  `;

  const services = [
    {
      name: "Hydraulic Systems",
      link: "/services/hydraulics",
    },
    {
      name: "Steel Trading",
      link: "/services/steel-trading",
    },
    {
      name: "Engineering Works",
      link: "/services/engineering-works",
    },
    {
      name: "Transport Services",
      link: "/services/transport",
    },
    {
      name: "Cattle Feed Supply",
      link: "/services/cattle-feed",
    },
  ];

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
              ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200"
              : "bg-slate-950/80 backdrop-blur-2xl border-b border-white/10"
          }
        `}
      >
        <div
          className="
            container-custom
            h-24 lg:h-28
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
    gap-3
    shrink-0
    z-50
    -ml-4
  "
          >
            <img
              src={logo}
              alt="Shradha Group"
              className="
      h-16
      sm:h-20
      lg:h-24
      w-auto
      object-contain
    "
            />

            <div
  className="
    hidden
    md:flex
    items-center
    ml-4
  "
>
  <h1
    className="
      text-[1.7rem]
      lg:text-[2rem]
      xl:text-[2.35rem]
      font-bold
      tracking-[0.18em]
      text-[#318da8]
      whitespace-nowrap
      leading-none
    "
    style={{
      fontFamily: "Inter, sans-serif",
    }}
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
            "
          >
            <nav
              className="
                flex
                items-center
                gap-9 xl:gap-12
              "
            >
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              {/* services */}
              <div className="relative group">
                <button
                  className="
    flex
    items-center
    gap-2
    text-sm
    uppercase
    tracking-[2px]
    font-medium
    text-[#318da8]
    hover:text-[#0057B8]
    transition-colors
    duration-300
  "
                >
                  services
                  <ChevronDown
                    size={16}
                    className="
      transition-transform
      duration-300
      group-hover:rotate-180
    "
                  />
                </button>

                <div
                  className="
      absolute
      top-full
      left-1/2
      -translate-x-1/2
      pt-4
      w-85
      opacity-0
      invisible
      translate-y-2
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      transition-all
      duration-300
      z-50
    "
                >
                  <div
                    className="
        bg-white
        rounded-[28px]
        shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        border
        border-slate-100
        overflow-hidden
      "
                  >
                    <div className="p-4">
                      {services.map((item) => (
                        <Link
                          key={item.link}
                          to={item.link}
                          className="
              block
              px-5
              py-4
              rounded-2xl
              text-slate-700
              hover:bg-linear-to-r
              hover:from-blue-50
              hover:to-violet-50
              hover:text-[#0057B8]
              transition-all
            "
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className={`
              lg:hidden
              relative
              z-50
              ml-auto
              transition-colors
              duration-300
              ${isScrolled ? "text-slate-900" : "text-white"}
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
          w-70
          sm:w-[320px]
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
            pt-28
            px-8
            gap-8
          "
        >
          <h2
            className="
              text-2xl
              font-semibold
              pb-6
              border-b
              border-slate-200
            "
          >
            SHRADHA <span className="text-[#318da8]">GROUP</span>
          </h2>

          <NavLink
            to="/"
            className="text-xl text-[#318da8]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-xl text-[#318da8]"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          <div className="border-y border-slate-100 py-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Our Services</p>
            <div className="flex flex-col gap-3">
              {services.map((item) => (
                <NavLink key={item.link} to={item.link} className="text-base text-[#318da8]" onClick={() => setIsOpen(false)}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/contact"
            className="text-xl text-[#318da8]"
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
            bg-black/50
            backdrop-blur-sm
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
