import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import OrdersIcon from "../assets/icons/OrdersIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import CartIcon from "../assets/icons/CartIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import AccountUserIcon from "../assets/icons/AccountUserIcon";
import { MdLogout } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import InputBoxComponent from "../components/InputBoxComponent";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "../components/Button";

const MyAccountsPage = () => {
  const [isSPassShow, setIsPasswordShow] = useState(false);

  const handleShowPassword = (type) => {
    if (type === "show") {
    }
    setIsPasswordShow(!isSPassShow);
  };

  return (
    <>
      <div className={`mt-16 mb-[122px]`}>
        <Container>
          <div className={`flex justify-between items-center`}>
            <div className={`w-1/4 border border-black-25 rounded-[25px] p-10`}>
              <div
                className={`w-[252px] h-[252px] bg-lightGray rounded-full mx-auto overflow-hidden`}
              >
                <img
                  src="images/accountProfilePic.jpg"
                  alt="profilePicture"
                  className="object-cover"
                />
              </div>
              <div className={`border-b border-black-25 mb-10`}>
                <h3
                  className={`font-["poppins"] font-semibold text-2xl text-black text-center mt-10`}
                >
                  Amelia Robert
                </h3>
                <p
                  className={`font-["poppins"] font-normal text-sm text-black-50 text-center mt-1 mb-10`}
                >
                  amelia.watson@eshop.com
                </p>
              </div>
              <ul className={`flex flex-col gap-y-4`}>
                <li className={`flex justify-start items-center gap-x-4`}>
                  <OrdersIcon />
                  <span
                    className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                  >
                    order
                  </span>
                </li>
                <li className={`flex justify-start items-center gap-x-4`}>
                  <WalletIcon />
                  <span
                    className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                  >
                    Wallet
                  </span>
                </li>
                <li className={`flex justify-start items-center gap-x-4`}>
                  <CartIcon />
                  <span
                    className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                  >
                    Cart
                  </span>
                </li>
                <li className={`flex justify-start items-center gap-x-4`}>
                  <HomeIcon />
                  <span
                    className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                  >
                    Address
                  </span>
                </li>
                <li className={`flex justify-start items-center gap-x-4`}>
                  <AccountUserIcon />
                  <span
                    className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                  >
                    Account Details
                  </span>
                </li>
                <li className={`flex justify-start items-center gap-x-4`}>
                  <IoLogOutOutline className={`text-[30px] text-black`} />
                  <span
                    className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
            <div className={`w-[71.8421%] h-[760px] rounded-[25px]`}>
              <div className={`flex justify-between items-center mb-12`}>
                <div
                  className={`w-[48.7179%] h-[236px] bg-lightGray rounded-[25px] p-12`}
                >
                  <h4
                    className={`w-[37%] font-["poppins"] font-semibold text-4xl leading-[46px] text-black`}
                  >
                    Order Tracking
                  </h4>
                  <p
                    className={`font-["montserrat"] font-normal text-xl text-black-75 mt-[18px]`}
                  >
                    See your order history.
                  </p>
                </div>
                <div
                  className={`w-[48.7179%] h-[236px] bg-lightGray rounded-[25px] p-12`}
                >
                  <h4
                    className={`w-[37%] font-["poppins"] font-semibold text-4xl leading-[46px] text-black`}
                  >
                    Billing Address
                  </h4>
                  <p
                    className={`font-["montserrat"] font-normal text-xl text-black-75 mt-[18px]`}
                  >
                    Set your billing address.
                  </p>
                </div>
              </div>
              <h1
                className={`inline-block font-["poppins"] font-semibold text-4xl text-black capitalize relative after:content=[''] after:w-full after:h-1 after:bg-orange after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2`}
              >
                Account Details
              </h1>
              <div
                className={`flex flex-wrap justify-start items-center gap-6 mt-12 mb-5`}
              >
                <div className={`w-[48.7179%] mb-6`}>
                  <InputBoxComponent
                    labelText="First Name"
                    placeholderText="Amelia Robert"
                  />
                </div>
                <div className={`w-[49%] mb-6`}>
                  <InputBoxComponent
                    labelText="Last Name"
                    placeholderText="Watson"
                  />
                </div>
                <div className={`w-[48.7179%] mb-6`}>
                  <InputBoxComponent
                    labelText="Email Address"
                    placeholderText="Amelia Robert"
                  />
                </div>
                <div className={`w-[49%] mb-6`}>
                  <InputBoxComponent
                    labelText="Password"
                    inputType="password"
                    placeholderText="Watson"
                  />
                </div>
              </div>
              <Button text="Edit Profile" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyAccountsPage;
