import { useMoviesQuery } from "../../queries/queries";
import { List, Card } from "antd";
import { IMovie, IPerson } from "../../types";
import { Link } from "react-router-dom";

export const MoviesPage = (): JSX.Element => {
  const { data: movies } = useMoviesQuery();

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={movies?.results}
      renderItem={(film: IMovie) => {
        const filmsId = film.url.split("/");
        const id = filmsId[5];
        return (
          <List.Item>
            <Card title={<Link to={`/films/${id}`}>{film.title}</Link>}>
              <p>{film.episode_id}</p>
            </Card>
          </List.Item>
        );
      }}
    />
  );
};
