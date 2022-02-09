import { useEffect, useState } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  title: string;
  movie: Array<{}>;
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.title} </span>
        </span>
      </header>

      <main>
        <div className="movies-list">{props.movie}</div>
      </main>
    </div>
  );
}
