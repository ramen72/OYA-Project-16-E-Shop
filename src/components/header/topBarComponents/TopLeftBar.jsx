import { Link } from "react-router-dom";
import LocationIcon from "../../../assets/icons/LocationIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";

const TopLeftBar = () => {
  return (
    <>
      <div className="flex items-center gap-x-[50px] text-black">
        <Link
          to="https://maps.app.goo.gl/2SjFb6hPT9c5pebh9"
          target="_blank"
          className='flex items-center gap-x-[10.37px] relative after:content-[""] after:absolute after:w-[1px] after:h-8 after:bg-black-25 after:-right-6 after:top-1/2 after:-translate-1/2'
        >
          <LocationIcon />
          123 Main Street, Anytown USA
        </Link>
        <Link to="tel:+11234567" className="flex items-center gap-x-2">
          <PhoneIcon />
          +1 (555) 123-4567
        </Link>
      </div>
    </>
  );
};

export default TopLeftBar;
