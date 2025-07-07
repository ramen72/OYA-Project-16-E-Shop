import React from "react";
import Container from "../components/commonLayouts/Container";
import InputBoxComponent from "../components/InputBoxComponent";
import Button from "../components/Button";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactPage = () => {
  return (
    <>
      <div className={`mt-8 mb-20`}>
        <Container>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7234723749457!2d90.36561277592779!3d23.75723848851276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5871486d729de1d%3A0xf7d0c26c2f521f27!2sOne%20Year%20Academy!5e0!3m2!1sen!2sbd!4v1751856785146!5m2!1sen!2sbd"
              height="600"
              loading="lazy"
              className={`w-full`}
            ></iframe>
          </div>
          <div
            className={`flex justify-start items-center gap-x-8 font-["montserrat"] font-normal text-base text-black mt-16 mb-12`}
          >
            <span
              className={`relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Home
            </span>
            <span
              className={`relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              contact
            </span>
            <span className={`font-bold`}>Checkout</span>
          </div>
          <div>
            <div className={`flex justify-between mt-12`}>
              <div className={`w-[57.2368%]`}>
                <h1
                  className={`font-["poppins"] font-semibold text-4xl text-black capitalize`}
                >
                  Contact Us
                </h1>

                <p
                  className={`font-["montserrat"] font-normal text-xl text-black capitalize mt-3`}
                >
                  Have any questions for us? Don’t hesitate to contact us.
                </p>
                <div className={`mt-12 mb-8`}>
                  <InputBoxComponent
                    labelText="Name"
                    mandatory={true}
                    placeholderText="Name"
                  />
                </div>
                <div className={`flex justify-between items-center mb-8`}>
                  <div className={`w-[39.6552%]`}>
                    <InputBoxComponent
                      labelText="Phone Number"
                      inputType="number"
                      placeholderText="Enter your phone"
                    />
                  </div>
                  <div className={`w-[58.62072%]`}>
                    <InputBoxComponent
                      inputType="email"
                      mandatory={true}
                      labelText="Email Address"
                    />
                  </div>
                </div>
                <div className={`mb-8`}>
                  <InputBoxComponent
                    labelText="Message"
                    mandatory={true}
                    isTextarea={true}
                  />
                </div>
                <Button text="Submit" />
              </div>
              <div className={`w-[39.0789%]`}>
                <div className={`bg-lightGray p-10 rounded-3xl`}>
                  <h5
                    className={`font-["poppins"] font-semibold text-2xl text-black capitalize`}
                  >
                    Let's Keep in Touch!
                  </h5>
                  <p
                    className={`font-["montserrat"] font-normal text-xl leading-[30px] text-black-75 mt-4 mb-10`}
                  >
                    We would love to hear from you. Contact us for any inquiries
                    you might have for us.
                  </p>
                  <ul className={`flex flex-col gap-y-3`}>
                    <li className={`flex justify-start items-center gap-x-6`}>
                      <FaPhone
                        className={`text-[20px] text-iconColor rotate-90`}
                      />
                      <span
                        className={`font-["montserrat"] font-bold text-base leading-[30px] text-black`}
                      >
                        +1 (555) 123-4567
                      </span>
                    </li>
                    <li className={`flex justify-start items-center gap-x-6`}>
                      <IoIosMail className={`text-[20px] text-iconColor`} />
                      <span
                        className={`font-["montserrat"] font-bold text-base leading-[30px] text-black`}
                      >
                        information@eshop.com
                      </span>
                    </li>
                    <li className={`flex justify-start items-center gap-x-6`}>
                      <FaLocationDot className={`text-[20px] text-iconColor`} />
                      <span
                        className={`font-["montserrat"] font-bold text-base leading-[30px] text-black`}
                      >
                        123 Main Street, Suite 105, Anytown USA
                      </span>
                    </li>
                  </ul>
                  <h4
                    className={`inline-block font-["montserrat"] font-bold text-xl leading-[30px] text-black mt-10 relative after:content-[""] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`}
                  >
                    Opening Hours
                  </h4>
                  <div className={`mt-7`}>
                    <p
                      className={`font-["montserrat"] font-normal text-base leading-6 text-black`}
                    >
                      <span className={`font-bold mr-1`}>MON to FRI:</span>
                      08:00 AM - 04:00 PM
                    </p>
                    <p
                      className={`font-["montserrat"] font-normal text-base leading-6 text-black mt-1`}
                    >
                      <span className={`font-bold mr-1`}>SAT to SUN:</span>
                      09:00 AM - 03:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;
