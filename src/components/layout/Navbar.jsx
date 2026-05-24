import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/icons/SGLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
        <div className="container-custom h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="/"
            className="text-2xl lg:text-3xl font-semibold"
          >
            <img
              src={logo}
              alt="Shradha Group Logo"
              className="h-12"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="/"
              className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              Home
            </a>

            <a
              href="/about"
              className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              About
            </a>

            <a
              href="/contact"
              className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-[60] shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-black/5">
          <h2 className="text-xl font-semibold">
            Menu
          </h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6">
          <a
            href="/"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <a
            href="/about"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>

          <a
            href="/contact"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;