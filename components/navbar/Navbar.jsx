import Image from "next/image";
import ludodiinRevers from "../../public/iconsFooter/ludodiinRevers.png";
import hamburguesa from "../../public/iconsFooter/hamburguesa.png";
import close from "../../public/iconsFooter/close.png";
import styleGlobal from "../../styles/Home.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full ">
      <div className="w-full flex justify-around pt-1 pb-1 fixed  bottom-0 bg-bgNavbar backdrop-blur-md z-30">
        <Image src={ludodiinRevers} width={50} height={50} />
        <div></div>
        <div className="flex items-center z-40">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <Image
                src={close}
                width={20}
                height={20}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <Image
                src={hamburguesa}
                width={25}
                height={15}
                onClick={() => setToggle(!toggle)}
              />
            )}
          </button>
        </div>
      </div>
      {toggle ? (
        <div
          className={`${styleGlobal.ulNavbar} ${styleGlobal.bgNavbar} text-center w-full h-full fixed z-10 bg-gradient-to-r from-bgListNavbarfrist  to-bgListNavbarSecond `}
        >
          <h1 className={`${styleGlobal.h2Title} pt-8 pb-8`}> - LUDODIIN - </h1>
          <ul className={`${styleGlobal.ulNavbar} text-center`}>
            <li className={styleGlobal.liNavbar}>inicio</li>
            <li className={styleGlobal.liNavbar}>sobre nosotros</li>
            <li className={styleGlobal.liNavbar}>¿Quienes Somos?</li>
            <li className={styleGlobal.liNavbar}>Equipo</li>
            <li className={styleGlobal.liNavbar}>Iniciar Sesion</li>
            <li className={styleGlobal.liNavbar}>Registrarte</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
