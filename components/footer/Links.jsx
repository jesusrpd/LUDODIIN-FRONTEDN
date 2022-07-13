import Img from "next/image";
import imgPointWhite from "../../public/assets/oval.png";
import { Link } from "./Link";
import stylesGlobal from "../../styles/Home.module.css";

export const Links = () => {
  return (
    <div className="w-4/5 m-auto pt-4 pb-5">
      <h2 className={stylesGlobal.h2Title}>Links</h2>
      <div className="w-full flex ">
        <div className="w-1/2 flex flex-col text-white">
          <ul>
            <li className="flex flex-row">
              <div className=" mr-3">
                <Img src={imgPointWhite} width="10" height="10" />
              </div>
              <Link src="#inicio" text="Inicio" />
            </li>
            <li className="flex flex-row">
              <div className=" mr-3">
                <Img src={imgPointWhite} width="10" height="10" />
              </div>
              <Link src="#sobrenosotros" text="Sobre nosotros" />
            </li>
            <li className="flex flex-row">
              <div className=" mr-3">
                <Img src={imgPointWhite} width="10" height="10" />
              </div>
              <Link src="#quienessomos" text="¿Quienes somos?" />
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex flex-col text-white">
          <ul type="A">
            <li className="flex flex-row">
              <div className=" mr-3">
                <Img src={imgPointWhite} width="10" height="10" />
              </div>
              <Link src="#equipo" text="Equipo" />
            </li>
            <li className="flex flex-row">
              <div className=" mr-3">
                <Img src={imgPointWhite} width="10" height="10" />
              </div>
              <Link src="#iniciarsesion" text="Iniciar sesión" />
            </li>
            <li className="flex flex-row">
              <div className=" mr-3">
                <Img src={imgPointWhite} width="10" height="10" />
              </div>
              <Link src="#registrarse" text="Registrarse" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
