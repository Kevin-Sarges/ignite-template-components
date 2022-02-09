interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.title} </span>
      </span>
    </header>
  );
}
