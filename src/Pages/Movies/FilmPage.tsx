import { useParams } from "react-router-dom";
import { useFilmQuery } from "../../queries/queries";
import { Card } from "antd";

export const FilmPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: film } = useFilmQuery(id!);
  return (
    <Card title={<h3>{film?.title}</h3>}>
      <p>{film?.episode_id}</p>
      <p>{film?.opening_crawl}</p>
      <p>{film?.director}</p>
    </Card>
  );
};