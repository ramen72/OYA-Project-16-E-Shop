import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const LoginPage = () => {
  return (
    <>
      <div className={`h-[calc(100vh-250px)] flex justify-center items-center`}>
        <div className={`w-96 h-[600px] bg-lightGray p-6 rounded-3xl`}>
          <Button href="/register" text="Register" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
