import React from "react";
import Data from "../../data.js";
import StoreInfo from "../../components/commons/StoreInfo.js";

const MiddleStores = (props) => {
  return (
    <div>
      {Data[1].children.map((store) => {
        return (
          <StoreInfo
            key={store.id}
            storeName={store.storeName}
            tag={store.tag}
            tel={store.tel}
            addressNo={store.addressNo}
            address={store.address}
            series={store.series}
            openTime={store.openTime}
          ></StoreInfo>
        );
      })}
    </div>
  );
};
export default MiddleStores;
