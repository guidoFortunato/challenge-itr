import { Tags } from "./Tags";

export const ArticleCard = ({ data }) => {
  const dataTags = data.taxonomy.tags;
  
  return (
    <>
    
      {dataTags.length > 0 && (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="card">
           
            <div className="card-body">
              <h5 className="card-title">Tags</h5>
              <p className="card-text">
                <Tags dataTags={dataTags} />
              </p>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};
