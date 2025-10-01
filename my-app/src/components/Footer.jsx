import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebookF size={18} />, color: "#1877F2", link: "https://facebook.com", name: "Facebook" },
    { icon: <FaTwitter size={18} />, color: "#1DA1F2", link: "https://twitter.com", name: "Twitter" },
    { icon: <FaInstagram size={18} />, color: "#E4405F", link: "https://instagram.com", name: "Instagram" },
    { icon: <FaLinkedinIn size={18} />, color: "#0A66C2", link: "https://linkedin.com", name: "LinkedIn" },
    { icon: <FaYoutube size={18} />, color: "#FF0000", link: "https://youtube.com", name: "YouTube" },
    { icon: <FaWhatsapp size={18} />, color: "#25D366", link: "https://wa.link/9hwu05", name: "WhatsApp" },
  ];

  const quickLinks = [
    { name: "Home", link: "https://jingleholidaybazar.com/index.php" },
    { name: "About Us", link: "https://jingleholidaybazar.com/about.php" },
    { name: "Blog list", link: "https://jingleholidaybazar.com/#" },
    { name: "Destinations", link: "https://jingleholidaybazar.com/destinations.php" },
    { name: "Hotels", link: "https://jingleholidaybazar.com/hotel.php" },
    { name: "Gallery", link: "https://jingleholidaybazar.com/gallery.php" },
  ];

  const domesticPackages = [
    { name: "Uttarakhand", link: "https://jingleholidaybazar.com/Uttarakhand-Tour-Packages.php" },
    { name: "Mumbai", link: "https://jingleholidaybazar.com/Mumbai-Tour-Packages.php" },
    { name: "Ladakh", link: "https://jingleholidaybazar.com/Ladakh-Tour-Packages.php" },
    { name: "Meghalaya", link: "https://jingleholidaybazar.com/Meghalaya-Tour-Packages.php" },
    { name: "North East India", link: "https://jingleholidaybazar.com/North-east-india-Tour-Packages.php" },
    { name: "Rajasthan", link: "https://jingleholidaybazar.com/Rajasthan-Tour-Packages.php" },
  ];

  const internationalPackages = [
    { name: "Maldives", link: "https://jingleholidaybazar.com/Maldives-Tour-Packages.php" },
    { name: "Singapore", link: "https://jingleholidaybazar.com/Singapore-Tour-Packages.php" },
    { name: "Switzerland", link: "https://jingleholidaybazar.com/Switzerland-Tour-Packages.php" },
    { name: "Saudi Arabia", link: "https://jingleholidaybazar.com/Saudi-Arabia-Tour-Packages.php" },
    { name: "Thailand", link: "https://jingleholidaybazar.com/Thailand-Tour-Packages.php" },
    { name: "Dubai", link: "https://jingleholidaybazar.com/Dubai-Tour-Packages.php" },
  ];

  const yatraPackages = [
    { name: "Mata Vaishno", link: "https://jingleholidaybazar.com/Mata-Vaishno-Devi-Tour-Packages.php" },
    { name: "Kedarnath", link: "https://jingleholidaybazar.com/Kedarnath-Tour-Packages.php" },
    { name: "Badrinath", link: "https://jingleholidaybazar.com/Badrinath-Tour-Packages.php" },
    { name: "Char Dham Yatra", link: "https://jingleholidaybazar.com/Char-Dham-Yatra-Tour-Packages.php" },
    { name: "Ramayana Yatra", link: "https://jingleholidaybazar.com/Ramayana-Tour-Packages.php" },
    { name: "9 Devi Yatra", link: "https://jingleholidaybazar.com/9-Devi-Tour-Packages.php" },
  ];

  return (
    <footer className="bg-gradient-to-br from-zinc-100 to-zinc-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 md:gap-20 lg:gap-24 text-center sm:text-left">
          
          <div className="lg:col-span-1 sm:text-left">
            <h6 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold uppercase text-gray-800 border-b-2 border-sky-500 pb-2 inline-block">
              Contact
            </h6>
            <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
              <h3 className="font-bold text-sky-600 text-base sm:text-lg mb-2">Jingle Holiday Bazar</h3>
              <p className="text-xs sm:text-sm italic mb-3">Travel with us from here to any where...</p>
              
              <p className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                <FaPhone className="text-sky-600 flex-shrink-0" size={16} />
                <a href="https://wa.link/9hwu05" className="hover:text-sky-600 transition-colors duration-300">
                  +91 8506922777
                </a>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                <FaPhone className="text-sky-600 flex-shrink-0" size={16} />
                <a href="https://api.whatsapp.com/send?phone=8506944777&text=Hello,%20I%20want%20more%20info%20about%20the%20your%20tours%20plane...?" className="hover:text-sky-600 transition-colors duration-300">
                  +91 8506944777
                </a>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm">
                <FaEnvelope className="text-sky-600 flex-shrink-0" size={14} />
                <a 
                  href="mailto:jingleholidaybazar@gmail.com" 
                  className="hover:text-sky-600 transition-colors duration-300 break-all"
                >
                  jingleholidaybazar@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm">
                <FaEnvelope className="text-sky-600 flex-shrink-0" size={14} />
                <a 
                  href="mailto:thejingleholidaybazar@gmail.com" 
                  className="hover:text-sky-600 transition-colors duration-300 break-all"
                >
                  thejingleholidaybazar@gmail.com
                </a>
              </p>
              <p className="text-xs sm:text-sm font-semibold text-sky-600 mt-3">24/7 Dedicated Customer Support</p>
            </div>
          </div>

          <div>
            <h6 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold uppercase text-gray-800 border-b-2 border-sky-500 pb-2 inline-block">
              Quick Links
            </h6>
            <ul className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.link} 
                    className="group flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-600 hover:text-sky-600 transition-all duration-300"
                  >
                    <span className="font-bold group-hover:translate-x-1 transition-transform duration-300">›</span>
                    <span className="group-hover:underline">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold uppercase text-gray-800 border-b-2 border-sky-500 pb-2 inline-block">
              Domestic Packages
            </h6>
            <ul className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
              {domesticPackages.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.link} 
                    className="group flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-600 hover:text-sky-600 transition-all duration-300"
                  >
                    <span className="font-bold group-hover:translate-x-1 transition-transform duration-300">›</span>
                    <span className="group-hover:underline">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold uppercase text-gray-800 border-b-2 border-sky-500 pb-2 inline-block">
              International
            </h6>
            <ul className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
              {internationalPackages.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.link} 
                    className="group flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-600 hover:text-sky-600 transition-all duration-300"
                  >
                    <span className="font-bold group-hover:translate-x-1 transition-transform duration-300">›</span>
                    <span className="group-hover:underline">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold uppercase text-gray-800 border-b-2 border-sky-500 pb-2 inline-block">
              Yatra
            </h6>
            <ul className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
              {yatraPackages.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.link} 
                    className="group flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-600 hover:text-sky-600 transition-all duration-300"
                  >
                    <span className="font-bold group-hover:translate-x-1 transition-transform duration-300">›</span>
                    <span className="group-hover:underline">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5">
            
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-xs sm:text-sm md:text-base font-medium">
                <span className="hidden sm:inline">Powered By | </span>
                <span className="font-bold">Namrata Universal</span>
                <span className="hidden sm:inline"> | </span>
                <span className="block sm:inline mt-1 sm:mt-0">
                  All Rights Reserved © JingleHolidayBazar {new Date().getFullYear()}
                </span>
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 sm:gap-3">
                {socialIcons.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="bg-white/20 backdrop-blur-sm p-2 sm:p-2.5 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{ color: 'white' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = item.color;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
