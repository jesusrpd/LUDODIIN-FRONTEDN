import { Team } from "../components/team/team";
import DavidImg from "../public/assets/imgTeam/David.png";

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
      img: DavidImg,
    },
    {
      name: "Sol",
      rol: "Pedagoga",
      img: DavidImg,
    },
    {
      name: "Jesus",
      rol: "Full-Stack",
      img: DavidImg,
    },
  ];

  return (
    <div>
      <div>
        {teamData.map((user) => (
          <div>
            <img src={user.img.src} />
            <h1>{user.name}</h1>
            <h1 className="text-blue-700 text-2xl">{user.rol}</h1>
          </div>
        ))}
      </div>
      <Team />
    </div>
  );
}
