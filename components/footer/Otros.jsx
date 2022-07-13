import stylesGlobal from "../../styles/Home.module.css";
import { Link } from "./Link";
import Image from "next/image";
import termAndConditions from "../../public/iconsFooter/tems&conditionsIcon.png";
import mail from "../../public/iconsFooter/mailIcon.png";
import question from "../../public/iconsFooter/questionIcon.png";
import fon from "../../public/iconsFooter/fonIcon.png";
import location from "../../public/iconsFooter/locationIcon.png";

export const Otros = () => {
  return (
    <div className="w-4/5 m-auto pt-4 pb-5">
      <h2 className={stylesGlobal.h2Title}>Otros</h2>
      <div className="w-full flex ">
        <div className="w-full flex flex-col justify-center text-white">
          <ul className="m-auto">
            <li className={`${stylesGlobal.liLanding} flex  `}>
              <Image src={termAndConditions} width={23} height={20} />
              <div className=" mr-3"></div>
              <Link src="#inicio" text="Terminos y condiciones" />
            </li>

            <li
              className={`${stylesGlobal.liLanding} flex justify-center items-center `}
            >
              <Image src={mail} width={20} height={16} />
              <div className=" mr-3"></div>
              <Link src="#sobrenosotros" text="contacto@ludodiin.com" />
            </li>

            <li
              className={`${stylesGlobal.liLanding} flex justify-center items-center `}
            >
              <Image src={fon} width={20} height={20} />

              <div className=" mr-3"></div>
              <Link src="#quienessomos" text="Tel: +52 553704613" />
            </li>

            <li
              className={`${stylesGlobal.liLanding} flex justify-center items-center `}
            >
              <Image src={question} width={10} height={16} />
              <div className=" mr-3"></div>
              <Link src="#quienessomos" text="Preguntas frecuentes" />
            </li>

            <li
              className={`${stylesGlobal.liLanding} flex justify-center items-center `}
            >
              <Image src={location} width={16} height={20} />
              <div className=" mr-3"></div>
              <Link src="#quienessomos" text="México, CDMX" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
