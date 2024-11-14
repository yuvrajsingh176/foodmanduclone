import { RiMapPin2Fill } from "react-icons/ri";
import { MdPedalBike } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { propData } = props;
  const {
    VendorListingWebImageName,
    Name,
    Address1,
    DeliveryDistanceStr,
    CuisineTags,
  } = propData;
  return (
    <Link
      to={"/restaurants/details/" + propData?.Id}
      className="border-[1px] shadow-md border-black w-fit rounded-md"
    >
      <img
        className="h-52 w-96 rounded-md"
        src={VendorListingWebImageName}
        alt=""
      />
      <div className="flex flex-col gap-1 p-4">
        <p>{Name}</p>
        <div className="flex gap-4">
          <div className="flex items-center">
            <RiMapPin2Fill />
            {Address1}
          </div>
          <div className="flex items-center">
            <MdPedalBike />
            {DeliveryDistanceStr}
          </div>
        </div>
        <div className="flex items-center">
          <IoFastFood />
          {CuisineTags}
        </div>
      </div>
    </Link>
  );
};

export default Card;
