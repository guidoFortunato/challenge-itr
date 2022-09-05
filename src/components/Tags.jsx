import { Link } from "react-router-dom";

export const Tags = ({ item, index }) => {
  return (
    <li className="list-group-item">
      <span className="fw-bold me-3">
        {index + 1}) Slug:
        <span className="fw-bold color-red">
          <Link to={`/tema/${item.slug}`}>{item.slug}</Link>
        </span>
      </span>
      <span className="fw-bold me-3">
        Texto: <span className="fw-bold color-red">{item.text}</span>
      </span>
      <span className="fw-bold">
        Cantidad de veces que aparece:
        <span className="fw-bold color-red">{item.count}</span>
      </span>
    </li>
  );
};
