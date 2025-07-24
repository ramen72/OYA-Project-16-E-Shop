import Container from "../commonLayouts/Container";
import CartIcon from "../../assets/icons/CartIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon";
import Button from "../Button";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showSideBar } from "../../redux/slices/sideBarSlice";

const MiddleBar = () => {
  const dispatch = useDispatch();
  const [isShowSearch, setIsShowSearch] = useState(false);
  const location = useLocation();
  let handleSearch = () => {
    setIsShowSearch(!isShowSearch);
  };
  const handleShowSideBar = () => {
    dispatch(showSideBar());
  };
  console.log(location.pathname);
  return (
    <>
      <Container>
        <div className="flex justify-between items-center py-3 sm:py-6 px-1 sm:px-0">
          <div>
            <Link to={"/"}>
              <img
                src="images/logo.svg"
                alt="logo"
                className="w-[129px] h-[40px]"
              />
            </Link>
          </div>
          <div className="flex justify-end items-center">
            <div className="relative">
              <div
                className={` sm:hidden absolute top-1/2 -left-24 -translate-y-1/2 cursor-pointer`}
                onClick={handleShowSideBar}
              >
                <FaBars />
              </div>
              <input
                type="text"
                className={`w-[330px] sm:w-[332px] mr-12 sm:mr-0 ml-1 sm-ml-0 border border-black-50 py-2 sm:py-[18px] sm:px-6 rounded-[10px] placeholder: font-["Montserrat"] text-sm placeholder:leading-[20px] placeholder:font-normal placeholder:text-black-75 ${
                  !isShowSearch && "hidden"
                } px-3 sm:block`}
                placeholder="Search Products ..."
              />
              <div
                className={`absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer`}
                onClick={handleSearch}
              >
                <SearchIcon />
              </div>
            </div>
            <Link
              to={"/cart"}
              className=" w-[50px] sm:w-[150px] relative sm:pl-[50px] mr-0 sm:mr-16"
            >
              <CartIcon width={35} height={35} color="#303030" />
              <div className=" text-black absolute top-1/2 -translate-y-1/2 left-24 hidden sm:block">
                <p className='font-["Montserrat"] font-normal text-base capitalize leading-6'>
                  cart
                </p>
                <span className='font-["Montserrat"] font-bold text-base leading-6'>
                  $150,000
                </span>
              </div>
            </Link>
            <Link
              to={"/my-account"}
              className=' w-[30px]  sm:w-[170px] text-black  relative sm:pl-[50px] sm:after:content-[""] sm:after:w-[1px] sm:after:h-8 sm:after:bg-black sm:after:absolute sm:after:left-0 sm:after:top-1/2 sm:after:-translate-y-1/2'
            >
              <UserIcon width={28} height={28} color="#303030" />
              <div className="absolute top-1/2 -translate-y-1/2 left-24 hidden sm:block">
                <p className='font-["Montserrat"] font-normal text-base capitalize leading-6'>
                  User
                </p>
                <span className='font-["Montserrat"] font-bold text-base leading-6'>
                  Account
                </span>
              </div>
            </Link>
            {location.pathname === "/register" && (
              <div className={`absolute top-26 right-10 hidden sm:block`}>
                <Button href="/login" text="login" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleBar;
