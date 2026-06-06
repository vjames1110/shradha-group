import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

function Contact() {
  return (
    <section className="pt-40 pb-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="container-custom">
        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >
          <span
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-blue-100
              text-blue-700
              text-sm
              font-medium
              uppercase
              tracking-[3px]
            "
          >
            Contact Shradha Group
          </span>

          <h1
            className="
              text-5xl
              md:text-7xl
              mt-8
              mb-6
              text-slate-900
            "
          >
            Let's Build The Future Together
          </h1>

          <p
            className="
              max-w-3xl
              mx-auto
              text-lg
              text-slate-600
              leading-relaxed
            "
          >
            Connect with our team for hydraulic systems, steel trading,
            engineering fabrication, transport solutions, and agricultural
            commodity requirements.
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <div
          className="
            grid
            lg:grid-cols-5
            gap-10
          "
        >
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                shadow-xl
                border
                border-slate-200
              "
            >
              <h2 className="text-3xl mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <Phone
                    className="
                      text-blue-600
                      shrink-0
                    "
                  />

                  <div>
                    <h3 className="font-semibold">Phone</h3>

                    <p className="text-slate-600">+91 87189 65555</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Mail
                    className="
                      text-violet-600
                      shrink-0
                    "
                  />

                  <div>
                    <h3 className="font-semibold">Email</h3>

                    <p className="text-slate-600">info@shradhagroup.com</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <MapPin
                    className="
                      text-emerald-600
                      shrink-0
                    "
                  />

                  <div>
                    <h3 className="font-semibold">Address</h3>

                    <p className="text-slate-600 leading-relaxed">
                      Shop No. 112-113,
                      <br />
                      Beside Kamal Motors,
                      <br />
                      Transport Nagar,
                      <br />
                      Bilaspur, Chhattisgarh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BUSINESS UNITS */}
            <div
              className="
                mt-8
                bg-gradient-to-br
                from-blue-600
                to-violet-600
                text-white
                rounded-[32px]
                p-8
              "
            >
              <h3 className="text-2xl mb-6">Business Divisions</h3>

              <div className="space-y-4">
                {[
                  "Hydraulic Systems",
                  "Steel Trading",
                  "Engineering Works",
                  "Transport Services",
                  "DDGS Cattle Feed",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <Building2 size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                md:p-10
                shadow-xl
                border
                border-slate-200
              "
            >
              <h2 className="text-3xl mb-8">Send Us An Inquiry</h2>

              <form className="space-y-6">
                <div
                  className="
                    grid
                    md:grid-cols-2
                    gap-6
                  "
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      h-14
                      px-5
                      rounded-xl
                      border
                      border-slate-200
                      outline-none
                      focus:border-blue-500
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      h-14
                      px-5
                      rounded-xl
                      border
                      border-slate-200
                      outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-xl
                    border
                    border-slate-200
                    outline-none
                    focus:border-blue-500
                  "
                />
                <p className="text-sm text-slate-500 mt-2">
                  Select the business division related to your inquiry.
                </p>

                <select
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-xl
                    border
                   border-slate-200
                    outline-none
                   focus:border-blue-500
                   bg-white
                   text-slate-700
  "
                  name="service"
                >
                  <option value="">Select Business Division</option>

                  <option value="Hydraulic Systems">Hydraulic Systems</option>

                  <option value="Steel Trading">Steel Trading</option>

                  <option value="Engineering Works">Engineering Works</option>

                  <option value="Transport Services">Transport Services</option>

                  <option value="DDGS Cattle Feed">DDGS Cattle Feed</option>

                  <option value="General Inquiry">General Inquiry</option>
                </select>

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="
                    w-full
                    p-5
                    rounded-xl
                    border
                    border-slate-200
                    outline-none
                    focus:border-blue-500
                  "
                />

                <button
                  type="submit"
                  className="
                    px-10
                    py-4
                    rounded-full
                    text-white
                    font-medium
                    bg-gradient-to-r
                    from-blue-600
                    to-violet-600
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
