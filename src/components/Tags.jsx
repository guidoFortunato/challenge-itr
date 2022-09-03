export const Tags = ({ item }) => {
  
  return (
    <li className="list-group-item">
      <span className="fw-bold me-3">
        Nombre: <span className="fw-bold color-red">{item.slug}</span>
      </span>
      <span className="fw-bold me-3">
        Texto: <span className="fw-bold color-red">{item.text}</span>
      </span>
      <span className="fw-bold">
        Cantidad de veces que aparece:{" "}
        <span className="fw-bold color-red">{item.count}</span>
      </span>
    </li>
  );
};
