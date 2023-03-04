import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
function Contact() {
  return (
    <>
      <hr className="h-2 mx-8 bg-gray-200 border-0 dark:bg-gray-700" id="contact"/>

      <section className="py-8 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-semibold text-gray-700">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            Have a question or want to get in touch?
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mb-12">
            <div className="flex items-center mb-4 md:mb-0 md:mr-8">
              <FaEnvelope className="text-2xl mr-2 text-blue-700" />
              <a
                href="mailto:info@example.com"
                className="text-black font-semibold hover:underline"
              >
                info@example.com
              </a>
            </div>
            <div className="flex items-center mb-4 md:mb-0 md:mr-8">
              <FaPhoneAlt className="text-2xl mr-2 text-blue-700" />
              <a
                href="tel:+1234567890"
                className="text-black font-semibold hover:underline"
              >
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-2 text-blue-700" />
              <p className="text-black font-semibold">
                123 Main St, <br /> New York, NY 10001
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4 font-semibold text-gray-700 text-center">
          Connect with me on social media
        </h3>
        <div className="flex justify-center items-center">
          <a href="#" className="mr-6">
            <FaFacebook className="text-3xl text-blue-700 hover:text-blue-900" />
          </a>
          <a href="#" className="mr-6">
            <FaTwitter className="text-3xl text-blue-700 hover:text-blue-900" />
          </a>
          <a href="#" className="mr-6">
            <FaInstagram className="text-3xl text-blue-700 hover:text-blue-900" />
          </a>
          <a href="#">
            <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
