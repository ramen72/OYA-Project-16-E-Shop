import Container from "../commonLayouts/Container";
import CartIcon from "../../assets/icons/CartIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon";
import Button from "../Button";

const MiddleBar = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center py-6">
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
              <input
                type="text"
                className={`w-[332px] border border-black-50 py-[18px] px-6 rounded-[10px] placeholder: font-["Montserrat"] text-sm placeholder:leading-[20px] placeholder:font-normal placeholder:text-black-75`}
                placeholder="Search Products ..."
              />
              <div className={`absolute top-1/2 right-6 -translate-y-1/2`}>
                <SearchIcon />
              </div>
            </div>
            <Link to={"/cart"} className="w-[150px] relative pl-[50px] mr-16">
              <CartIcon width={35} height={35} color="#303030" />
              <div className=" text-black absolute top-1/2 -translate-y-1/2 left-24">
                <p className='font-["Montserrat"] font-normal text-base capitalize leading-6'>
                  cart
                </p>
                <span className='font-["Montserrat"] font-bold text-base leading-6'>
                  $150,000
                </span>
              </div>
            </Link>
            <Link
              to={"#"}
              className='w-[170px] text-black  relative pl-[50px] after:content-[""] after:w-[1px] after:h-8 after:bg-black after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2'
            >
              <UserIcon width={28} height={28} color="#303030" />
              <div className="absolute top-1/2 -translate-y-1/2 left-24">
                <p className='font-["Montserrat"] font-normal text-base capitalize leading-6'>
                  User
                </p>
                <span className='font-["Montserrat"] font-bold text-base leading-6'>
                  Account
                </span>
              </div>
            </Link>
            <div className={`absolute top-26 right-10`}>
              <Button href="/login" text="login" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MiddleBar;
