import React, { useState } from "react";
import Container from "../components/commonLayouts/Container";
import CartData from "../data/CartData";
import { Link } from "react-router-dom";
import Button from "./../components/Button";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const CartPage = () => {
  const [cartData, setCartData] = useState(CartData);
  const [totalAmount, setTotalAmount] = useState(5325);
  const [isDellAndShareBtnShow, setIsDellAndShareBtnShow] = useState(null);

  const handleClickForQty = (index, type) => {
    const updatedCart = [...cartData];

    if (type === "Plus") {
      updatedCart[index].qty += 1;
    } else if (type === "Minus" && updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
    }

    updatedCart[index].total =
      updatedCart[index].qty * updatedCart[index].price;
    setCartData(updatedCart);

    const totalAmount = updatedCart.reduce((acc, item) => acc + item.total, 0);
    setTotalAmount(totalAmount);
  };

  return (
    <>
      <Container>
        <div className={`mt-16 mb-24`}>
          <div
            className={`flex justify-start items-center gap-x-8 font-["montserrat"] font-normal text-base text-black mb-12`}
          >
            <span
              className={`relative after:content=[''] after:w-[1px] after:h-4/5 after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2`}
            >
              Home
            </span>
            <span className={`font-bold`}>Cart</span>
          </div>
          <h1
            className={`font-["poppins"] font-bold text-[56px] leading-[68px] text-black capitalize mb-7`}
          >
            Your Cart
          </h1>
          <div>
            <div
              className={`bg-lightGray py-8 px-14 rounded-[15px] flex font-["montserrat"] font-bold text-base text-black`}
            >
              <div className={`w-[49.1477%] uppercase`}>
                <h3>PRODUCT</h3>
              </div>
              <div className={`w-[15.8381%] uppercase`}>
                <h3>PRICE</h3>
              </div>
              <div className={`w-[16.8324%] uppercase`}>
                <h3>QTY</h3>
              </div>
              <div className={`w-[18.1818%] uppercase`}>
                <h3>TOTAL</h3>
              </div>
            </div>
            <ul>
              {cartData.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setIsDellAndShareBtnShow(index)}
                  onMouseLeave={() => setIsDellAndShareBtnShow(null)}
                  className={`p-10 first:pt-8 rounded-[15px] flex items-center font-["montserrat"] font-bold text-base text-black border border-transparent transition-all duration-200 hover:border-black-25 relative`}
                >
                  <div
                    className={`w-[49.4444%] pr-[90px] flex justify-between items-center gap-x-[62px]`}
                  >
                    <div className={`w-[44.55%] h-[214px]`}>
                      <img src={item.imageUrl} alt="" />
                    </div>
                    <div className={`w-[58.0056%]`}>
                      <p
                        className={`font-["montserrat"] font-normal text-base text-black tracking-[5px] uppercase mb-4`}
                      >
                        {item.category}
                      </p>
                      <h3
                        className={`font-["poppins"] font-semibold text-xl text-black`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`w-[15.8381%] uppercase`}>
                    <h3
                      className={`font-["poppins"] font-semibold text-xl text-black`}
                    >
                      <span>$</span>
                      {item.price}
                    </h3>
                  </div>
                  <div
                    className={`w-[16.8324%] flex justify-start items-center gap-x-4`}
                  >
                    <button
                      onClick={() => handleClickForQty(index, "Minus")}
                      className={`w-10 h-10 font-bold text-4xl rounded-full flex justify-center items-center hover:bg-lightGray cursor-pointer`}
                    >
                      -
                    </button>
                    <span
                      className={`w-10 h-10 bg-lightGray rounded-full flex justify-center items-center`}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => handleClickForQty(index, "Plus")}
                      className={`w-10 h-10 font-bold text-2xl rounded-full flex justify-center items-center hover:bg-lightGray cursor-pointer`}
                    >
                      +
                    </button>
                  </div>
                  <div className={`w-[18.1818%]`}>
                    <h3
                      className={`font-["poppins"] font-semibold text-xl text-black`}
                    >
                      <span>$</span>
                      {item.total}
                    </h3>
                  </div>
                  {isDellAndShareBtnShow === index && (
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 right-12`}
                    >
                      <button
                        className={`w-16 h-16 rounded-full text-orange border border-orange transition-all duration-300 hover:bg-orange hover:text-white flex justify-center items-center cursor-pointer`}
                      >
                        <FaRegTrashAlt className={`text-3xl`} />
                      </button>
                      <button
                        className={`w-16 h-16 rounded-full border text-orange border-orange transition-all duration-300 hover:bg-orange hover:text-white flex justify-center items-center  cursor-pointer mt-9`}
                      >
                        <IoShareSocialOutline className={`text-3xl`} />
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className={`flex justify-between items-center mt-8`}>
              <div
                className={`w-[40.6579%] border border-black-25 rounded-[10px] py-8 px-9 flex justify-between items-center`}
              >
                <input
                  type="text"
                  className={`w-3/4 placeholder:font-["montserrat"] text-xl outline-0 placeholder:font-normal placeholder:text-base placeholder:text-black-75`}
                  placeholder="Enter coupon code (ex: FIRSTPAY)"
                />
                <Link
                  to={"#"}
                  className={`font-["poppins"] font-semibold text-xl text-black capitalize`}
                >
                  Apply Code
                </Link>
              </div>
              <div
                className={`w-[40.6579%] border border-black-25 rounded-[10px] py-8 px-9 flex justify-between items-center`}
              >
                <h4
                  className={`font-["montserrat"] font-bold text-base text-black uppercase`}
                >
                  SUB TOTAL
                </h4>
                <p
                  className={`font-["poppins"] font-semibold text-2xl text-orange flex justify-end items-baseline`}
                >
                  <span>$</span>
                  {totalAmount}
                  <p
                    className={`font-["montserrat"] font-normal text-sm text-black pl-6 `}
                  >
                    ( excl. shipping fee )
                  </p>
                </p>
              </div>
            </div>
            <div className={`flex justify-end items-center gap-x-14 mt-8`}>
              <h3
                className={`font-["poppins"] font-semibold text-xl text-black capitalize`}
              >
                Continue Shopping
              </h3>
              <Link to={"/product-list"}>
                <Button text="Update Cart" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
