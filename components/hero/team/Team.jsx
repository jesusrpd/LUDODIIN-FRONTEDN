import teamData from "./teadData";
import Image from "next/image";
import styleGlobal from "../../../styles/Home.module.css";

export const Team = () => {
  return (
    <div id="equipo" className="w-full h-fit text-center">
      <h2 className={styleGlobal.h2Title}>Equipo</h2>
      {teamData.map((user) => (
        <div key={user.name} className="mt-8 mb-8">
          <Image priority src={user.img.src} width={134} height={130} />
          <h1 className="text-white font-bold text-3xl">{user.name}</h1>
          <h1 className="text-white text-base">{user.rol}</h1>
        </div>
      ))}
    </div>
  );
};
