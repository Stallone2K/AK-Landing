import Image from "next/image";
import Sofa from "../assets/Sofa.png";
import Dresser from "../assets/Dresser.png";
import ShoeDresser from "../assets/ShoeDresser.png";
function Inspiration() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-7xl font-extrabold drop-shadow-lg my-20">
        Inspiration Collection
      </h1>
      <div className="flex justify-center items-center gap-10">
        <Image src={Sofa} alt="Sofa" className="rounded-tl-3xl"></Image>
        <Image src={Dresser} alt="Dresser" className="mb-20"></Image>
        <Image
          src={ShoeDresser}
          alt="Shoe Dresser"
          className="rounded-br-3xl"
        ></Image>
      </div>
    </div>
  );
}

export default Inspiration;
