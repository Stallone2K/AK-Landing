import Image from "next/image";
import Blisswood from "../assets/Blisswood.png";
import Amazon from "../assets/Amazon.png";
import DreamHome from "../assets/DreamHome.png";
import OnBuy from "../assets/OnBuy.png";
import ManoMano from "../assets/ManoMano.png";
import Wayfair from "../assets/Wayfair.png";
import Ebay from "../assets/Ebay.png";
function Clients() {
  return (
    <div className="max-w-[1280px] m-auto flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-4xl font-extrabold">
        Our Manufacturing & Retail Partners
      </h1>
      <div className="flex items-center justify-center gap-10">
        <Image src={Blisswood} alt="Blisswood" width={200} height={200}></Image>
        <Image src={Amazon} alt="Amazon" width={200} height={200}></Image>
        <Image src={DreamHome} alt="DreamHome" width={200} height={200}></Image>
        <Image src={OnBuy} alt="OnBuy" width={200} height={200}></Image>
        <Image src={ManoMano} alt="ManoMano" width={200} height={200}></Image>
        <Image src={Wayfair} alt="Wayfair" width={200} height={200}></Image>
        <Image src={Ebay} alt="Ebay" width={200} height={200}></Image>
      </div>
    </div>
  );
}

export default Clients;
