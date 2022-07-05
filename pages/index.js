import DavidImg from "../public/assets/imgTeam/David.png";
import JasielImg from "../public/assets/imgTeam/Jasiel.png";
import SolImg from "../public/assets/imgTeam/Sol.png";
import JesusImg from "../public/assets/imgTeam/Jesus.png";
import LudodiinImg from '../public/assets/ludodiin.png';
import Img from 'next/image';
import { Link } from "../components/footer/Link";

export default function Home() {
  const teamData = [
    {
      name: "David",
      rol: "Front-end",
      img: DavidImg,
    },
    {
      name: "Jasiel",
      rol: "Full-Stack",
      img: JasielImg,
    },
    {
      name: "Sol",
      rol: "Pedagoga",
      img: SolImg,
    },
    {
      name: "Jesus",
      rol: "Full-Stack",
      img: JesusImg,
    },
  ];

  return (
    <>
      <div className="w-full h-fit text-center">
      <h2 className="text-white font-bold text-5xl">Equipo</h2>
      {teamData.map((user) => (
        <div key={user.name} className="my-8">
          <Img src={user.img.src} width={134} height={130}/>
          <h1 className="text-white font-bold text-3xl">{user.name}</h1>
          <h1 className="text-white text-base">{user.rol}</h1>
        </div>
      ))}
      </div>
      <footer>
        <h2>LUDODIIN</h2>
        <Img src={LudodiinImg} width={233} height={182}/>
        <h3>Links</h3>
        <Link src="#inicio" text="Inicio"/>
        <Link src="#sobrenosotros" text="Sobre nosotros"/>
        <Link src="#quienessomos" text="¿Quienes somos?"/>
        <Link src="#equipo" text="Equipo"/>
        <Link src="#iniciarsesion" text="Iniciar sesión"/>
        <Link src="#registrarse" text="Registrarse"/>
      </footer>
    </>
  );
}
