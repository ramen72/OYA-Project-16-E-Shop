import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <div className="containerWidth flex justify-between items-center text-sm text-">
                <div className="flex justify-between items-center gap-x-5">
                    <div className="flex justify-start items-center gap-x-1 pr-4 border-e">
                        <IoLocationOutline/>
                        <span>123 Main Street, Anytown USA</span>
                    </div>
                    <div className="flex justify-start items-center gap-x-1">
                        <FiPhone/>
                        <span>+1 (555) 123-4567</span>
                    </div>
                </div>
                <div className="flex">
                    <LuUserRound/>
                    <IoCartOutline/>
                </div>
            </div>
        </>
    );
};

export default Header;