import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { getTag } from "../helpers/getTag";

export const DetailSlug = () => {
  const navigate = useNavigate();
  const { orderTags } = useContext(DataContext);
  const { slug } = useParams();

  const slugCapitalize = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();

  const tag = getTag(orderTags, slug);
  if (!tag) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2>Slug: <span className="color-red">{ slugCapitalize }</span></h2>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
