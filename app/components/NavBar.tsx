import Image from "next/image";
import LogoImage from "../assets/Logo.png";
function NavBar() {
  return (
    <div className="flex items-center justify-between h-16 p-10 top-0">
      <Image
        src={LogoImage}
        alt="Logo"
        className="h-20 w-43 flex justify-center items-center"
      ></Image>
      <div className="flex gap-4 font-bold">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Career</h3>
        <h3>Gallery</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
  );
}

export default NavBar;
