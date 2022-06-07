import { useState } from "react";

interface Props {
  active: boolean;
}

const Sidebar: React.FC<Props> = ({ active }) => {
  const [sidebar, setSidebar] = useState(false);
  function showSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <div className={`sidebar ${active ? "active l--side" : ""}`}>
      <a href="/" className="pl-24 pb-24 pt-24" onClick={showSidebar}>
        My tasks
      </a>
      <a href="/" className="pl-24 pb-24">
        Get started
      </a>
      <a href="/" className="pl-24 pb-24">
        Link3
      </a>
      <a href="/" className="pl-24 pb-24">
        Help
      </a>
      <a href="/" className="pl-24">
        FAQ
      </a>
    </div>
  );
};

export default Sidebar;
