import { Link } from "react-router-dom";

export const MovieItem = ({ title, id}) => (
    <li>
        <Link to={`movie/${id}`}>{title}</Link>
    </li>
);

/*ideia é criar o id do filme para realizar o mapeamento */