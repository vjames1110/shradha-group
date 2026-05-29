import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-10">

      <div className="container-custom">

        {/* TOP GRID */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-14
            pb-16
            border-b
            border-white/10
          "
        >

          {/* BRAND */}
          <div>

            <h2 className="text-3xl mb-6 text-primary">
              Shradha Group
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Delivering trusted industrial,
              engineering, hydraulic,
              transport, and agricultural
              business solutions with
              long-term reliability and
              operational excellence.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4">

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-primary
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-2xl mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-white/70">

              <Link
                to="/"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* BUSINESSES */}
          <div>

            <h3 className="text-2xl mb-8">
              Businesses
            </h3>

            <div className="flex flex-col gap-4 text-white/70">

              <Link
                to="/business/hydraulics"
                className="hover:text-primary transition-colors"
              >
                Hydraulic Systems
              </Link>

              <Link
                to="/business/steel-trading"
                className="hover:text-primary transition-colors"
              >
                Steel Trading
              </Link>

              <Link
                to="/business/engineering-works"
                className="hover:text-primary transition-colors"
              >
                Engineering Works
              </Link>

              <Link
                to="/business/transport"
                className="hover:text-primary transition-colors"
              >
                Transport Services
              </Link>

              <Link
                to="/business/cattle-feed"
                className="hover:text-primary transition-colors"
              >
                Cattle Feed Supply
              </Link>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl mb-8">
              Contact
            </h3>

            <div className="space-y-5 text-white/70">

              <p>
                Shop No. 112-113, <br />
                Beside Kamal Motors,<br />
                Transport Nagar,<br/>
                Bilaspur, Chhattisgarh, India
              </p>

              <p>
                +91 87189 65555
              </p>

              <p>
                info@shradhagroup.com
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            text-white/50
            text-sm
          "
        >

          <p>
            © 2026 Shradha Group. All Rights Reserved.
          </p>

          <a
            href="https://smartsightanalytics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Designed & Developed with Excellence by @smartsight analytics
          </a>

        </div>
      </div>

    </footer>
  );
}

export default Footer;