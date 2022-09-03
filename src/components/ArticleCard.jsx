const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const ArticleCard = ({ itemData }) => {
  const { display_date } = itemData;

  console.log(itemData);

  const day = display_date.split(":")[0].split("-")[2].slice(0, 2);
  const monthNumber = display_date.split(":")[0].split("-")[1];
  const year = display_date.split(":")[0].split("-")[0];

  const month = monthNames[monthNumber - 1];

  const newDate = `${parseInt(day)} de ${month} de ${year}`;

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-2">
        <div className="card">
          <img
            src={itemData.promo_items.basic.url}
            alt="img re"
            className="img-thumbnail size-img"
          />
          <div className="card-body">
            <h5 className="card-title">{itemData.headlines.basic}</h5>
            <p className="card-text text-muted">{newDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};
