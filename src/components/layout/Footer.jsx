import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0f172a]
        text-white
        pt-24
        pb-10
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_35%)]
        "
      />

      <div className="container-custom relative z-10">
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
            <h2
              className="
                text-4xl
                mb-6
                text-gradient
              "
            >
              Shradha Group
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Delivering trusted industrial,
              engineering, hydraulic,
              transport and agricultural
              solutions with reliability,
              innovation and long-term
              operational excellence.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaLinkedinIn />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    hover:border-blue-500/40
                    hover:bg-blue-500/10
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Home",
                  link: "/",
                },
                {
                  label: "About",
                  link: "/about",
                },
                {
                  label: "Contact",
                  link: "/contact",
                },
              ].map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="
                    text-white/70
                    hover:text-blue-400
                    transition-colors
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* BUSINESSES */}
          <div>
            <h3 className="text-2xl mb-8">
              Our Services
            </h3>

            <div className="flex flex-col gap-4">
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
                    text-white/70
                    hover:text-violet-400
                    transition-colors
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl mb-8">
              Contact
            </h3>

            <div className="space-y-5 text-white/70">
              <p>
                Shop No. 112-113
                <br />
                Beside Kamal Motors
                <br />
                Transport Nagar
                <br />
                Bilaspur, Chhattisgarh
              </p>

              <p>
                +91 87189 65555
              </p>

              <p>
                shradha.marketing.05@gmail.com
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
            text-sm
            text-white/50
          "
        >
          <p>
            © 2026 Shradha Group.
            All Rights Reserved.
          </p>

          <a
            href="https://smartsightanalytics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-blue-400
              transition-colors
            "
          >
            Designed & Developed by
            SmartSight Analytics
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;