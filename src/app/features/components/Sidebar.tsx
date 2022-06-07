interface Props {
  active: boolean;
}

const Sidebar: React.FC<Partial<Props>> = (props) => {
  const { active } = props;
  return (
    <div className={`sidebar ${active ? "active l--side" : ""}`}>
      <a href="/" className="">
        My tasks
      </a>
      <a href="/" className="sidebar__link">
        Get started
      </a>
      <a href="/" className="sidebar__link">
        Link3
      </a>
      <a href="/" className="sidebar__link">
        Help
      </a>
      <a href="/" className="sidebar__link">
        FAQ
      </a>
    </div>
  );
};

export default Sidebar;
