import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import InputBoxComponent from "../components/InputBoxComponent";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import IamNotRobotIcon from "../assets/icons/IamNotRobotIcon";

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
            className={`font-["poppins"] font-bold text-[56px] text-black text-center mb-20 capitalize`}
          >
            Register
          </h1>
          <div
            className={`w-[39.0789%] h-[1218px] bg-lightGray rounded-3xl py-12 px-9 mx-auto`}
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
