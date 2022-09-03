import { useContext } from "react";
import { DataContext } from "../context/DataProvder";
import { Tags } from "./Tags";

export const OrderTags = () => {
  const { orderTags } = useContext(DataContext);

  return (
    <div className="col-12 mt-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tags</h5>
          <ul className="list-group">
            {orderTags.map((item, index) => (
              <>
                <Tags item={item} key={index} />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};