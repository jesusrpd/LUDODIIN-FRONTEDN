import { useState, useEffect } from "react";
import teamData from "./teadData";

export const Team = () => {
  // const [isSSR, setIsSSR] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // setIsSSR(false);
    setUsers(teamData);
  }, []);

  console.log(users);
  return (
    <div>
      <h1 className="text-black">SOY COMPONENT TEAM</h1>
      {/* <div>{users.map((user) => console.log(user))}</div> */}
    </div>
  );
};
