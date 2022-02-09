import { Button } from "./Button";

interface SideBarProps {
  contentContainer: Array<{}>;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">{props.contentContainer}</div>
    </nav>
  );
}
