import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import InputBoxComponent from "../components/InputBoxComponent";
import {
  FaFacebookF,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
  FaTwitter,
} from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import IamNotRobotIcon from "../assets/icons/IamNotRobotIcon";
import Button from "./../components/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [isSPassShow, setIsPasswordShow] = useState(false);

  const handleShowPassword = (type) => {
    if (type === "show") {
    }
    setIsPasswordShow(!isSPassShow);
  };

  return (
    <>
      <Container>
        <div className={`mt-16 mb-20`}>
          <h1
            className={`font-["poppins"] font-bold text-[56px] text-black text-center mb-18 capitalize`}
          >
            Register
          </h1>
          <div
            className={`w-[39.0789%] bg-lightGray rounded-3xl py-12 px-9 mx-auto`}
          >
            <InputBoxComponent
              labelText="Email Address"
              bg="bg-white"
              border={false}
              placeholderText="amelia.watson@eshop.com"
            />
            <div className={`relative mt-6`}>
              <InputBoxComponent
                labelText="password"
                inputType={isSPassShow ? "text" : "password"}
                bg="bg-white"
                border={false}
                placeholderText="a.watson@eshop"
              />
              <div className={`absolute top-[70px] right-6`}>
                {isSPassShow ? (
                  <FaRegEyeSlash
                    onClick={() => handleShowPassword("show")}
                    className={`cursor-pointer`}
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setIsPasswordShow(!isSPassShow)}
                    className={`cursor-pointer`}
                  />
                )}
              </div>
            </div>
            <span className={`font-["montserrat"] font-bold text-base`}>
              Password Strength:
            </span>
            <span className={`font-["montserrat"] font-normal text-base ml-2`}>
              Perfect!
            </span>
            <div className={`relative mt-6`}>
              <InputBoxComponent
                labelText="Username"
                bg="bg-white"
                border={false}
                placeholderText="ameliawatson"
              />
              <div className={`absolute top-[60px] right-6`}>
                <IoCheckmark className={`text-3xl text-orange`} />
              </div>
            </div>
            <div
              className={`mt-6 flex justify-between items-center py-5 pl-8 pr-5 bg-white rounded-[10px]`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className=" w-8 h-8 border-2 border-lightGray rounded-sm checked:bg-blue-500 checked:border-blue-500"
                />
                <label
                  className={`font-["montserrat"] font-normal text-xl text-black-75`}
                >
                  I'm not a robot
                </label>
              </label>
              <IamNotRobotIcon />
            </div>
            <div className={`flex justify-start items-start gap-x-5 mt-6`}>
              <div
                className={`w-[68px] h-[34px] bg-orange rounded-[25px] flex justify-end items-center p-[5px]`}
              >
                <div className={`w-6 h-6 bg-white rounded-full`}></div>
              </div>
              <div>
                <h4
                  className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                >
                  Subscribe to Newsletter
                </h4>
                <p
                  className={`font-["montserrat"] font-normal text-base text-black-75`}
                >
                  Get monthly new updates via email.
                </p>
              </div>
            </div>
            <div className={`flex justify-start items-start gap-x-5 mt-10`}>
              <div
                className={`w-[68px] h-[34px] bg-white rounded-[25px] flex justify-start items-center p-[5px]`}
              >
                <div className={`w-6 h-6 bg-lightGray rounded-full`}></div>
              </div>
              <div>
                <h4
                  className={`font-["montserrat"] font-bold text-base text-black capitalize`}
                >
                  Subscribe to Newsletter
                </h4>
                <p
                  className={`font-["montserrat"] font-normal text-base text-black-75`}
                >
                  Get monthly new updates via email.
                </p>
              </div>
            </div>
            <div className={`mt-6 mb-12`}>
              <Button text="Create Account" displayType="block" />
            </div>
            <div
              className={`flex justify-center items-center gap-x-2 border-b border-black-25 pb-[66px] relative`}
            >
              <p
                className={`font-["montserrat"] font-normal text-base text-black`}
              >
                Already have an account?
              </p>
              <Link
                to={"/login"}
                className={`font-["montserrat"] font-bold text-base text-black capitalize`}
              >
                Sing in
              </Link>
              <span
                className={`w-[53px] bg-lightGray font-["montserrat"] font-bold text-base text-black text-center absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2`}
              >
                OR
              </span>
            </div>
            <div className={`mt-[59px] flex justify-between items-center`}>
              <div
                className={`w-[155px] h-[78px] bg-white rounded-[10px] flex justify-center items-center`}
              >
                <FaGoogle className="text-[28px] text-black" />
              </div>
              <div
                className={`w-[155px] h-[78px] bg-white rounded-[10px] flex justify-center items-center`}
              >
                <FaFacebookF className="text-[28px] text-black" />
              </div>
              <div
                className={`w-[155px] h-[78px] bg-white rounded-[10px] flex justify-center items-center`}
              >
                <FaTwitter className="text-[28px] text-black" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
