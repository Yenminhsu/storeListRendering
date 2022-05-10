import { Fragment } from "react";
import styled from "styled-components";

const StoreInfo = (props) => {
  return (
    <Fragment>
      <li>
        {props.storeName}
        {props.tag}
      </li>
      <li>電話: {props.tel}</li>
      <li>
        地址: {props.addressNo}
        {props.address}
      </li>
      <li>販售系列: {props.series}</li>
      <li>營業時間: {props.openTime}</li>
    </Fragment>
  );
};

export default StoreInfo;
