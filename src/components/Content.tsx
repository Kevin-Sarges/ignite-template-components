import Header from "./Header";

interface ContentProps {
  title: string;
  movie: Array<{}>;
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <Header title={props.title} />

      <main>
        <div className="movies-list">{props.movie}</div>
      </main>
    </div>
  );
}
