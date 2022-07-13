import { Links } from "./footer/Links";
import LudodiinImg from "./../public/assets/ludodiin.png";
import Image from "next/image";
import { Otros } from "./footer/Otros";
import { Navbar } from "./navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main>{children}</main>

      <footer className="mb-14 w-full">
        <div className="w-full">
          <div className="m-auto text-center text-white pt-3 pb-3">
            <h2 className="text-white font-bold text-5xl ">LUDODIIN</h2>
            <p className="mt-8 mb-8"> - Por una inclusion laboral - </p>
            <Image src={LudodiinImg} width={233} height={182} />
          </div>
          <Links />
          <Otros />
        </div>
      </footer>
    </div>
  );
};
