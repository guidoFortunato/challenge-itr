import { Tags } from "./Tags";

export const ArticleCard = ({ data }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card">
        {/* <img src="..." className="card-img-top" alt="img" /> */}
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            <Tags tagsList={data.taxonomy} />
          </p>
        </div>
      </div>
    </div>
  );
};
