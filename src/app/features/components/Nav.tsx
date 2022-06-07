import { useState } from "react";
import Sidebar from "./Sidebar";

function Nav() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="nav">
      <div onClick={() => setActive(!active)} className="container ml-24 mt-24">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <Sidebar active={active} />
    </div>
  );
}
export default Nav;
