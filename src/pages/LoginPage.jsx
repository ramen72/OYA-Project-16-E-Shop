import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
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

const LoginPage = () => {
  const [isSPassShow, setIsPasswordShow] = useState(false);

  const handleShowPassword = (type) => {
    if (type === "show") {
    }
    setIsPasswordShow(!isSPassShow);
  };
  return (
    <>
      <div className={`mt-5 mb-10`}>
        <h1
          className={`font-["poppins"] font-bold text-5xl text-black text-center mb-5 capitalize`}
        >
          Login
        </h1>
        <div
          className={`w-[39.0789%] bg-lightGray rounded-3xl py-8 px-9 mx-auto`}
        >
          <div className={`relative mb-6`}>
            <InputBoxComponent
              labelText="Username"
              bg="bg-white"
              border={false}
              placeholderText="ameliawatson"
            />
            <div className={`absolute top-[60px] right-4`}>
              <IoCheckmark className={`text-3xl text-orange`} />
            </div>
          </div>
          <div className={`relative mt-6`}>
            <InputBoxComponent
              labelText="password"
              inputType={isSPassShow ? "text" : "password"}
              bg="bg-white"
              border={false}
              placeholderText="a.watson@eshop"
            />
            <div className={`absolute top-[70px] right-5`}>
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
          <div className={`mt-6`}>
            <Button text="Login" displayType="block" />
          </div>
          <div className={`flex justify-center items-center gap-x-2 mt-5`}>
            <p
              className={`font-["montserrat"] font-normal text-base text-black`}
            >
              Have no an account?
            </p>
            <Link
              to={"#"}
              className={`font-["montserrat"] font-bold text-base text-black capitalize`}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
