import React from "react";
import style from "./Productcardstyle.module.css";

function Productcard(props) {
  const data = props.pdt;

  function ADCdata(){
    props.cart(data)
  }


  return (
    <div className={style.card}>
      <img src={data.image} height={200} />
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <p className={style.rating}>Rating:{data.rating.rate}*</p>
      <p className={style.rating}>{data.rating.count} Pieces Remaining Only</p>
      <h3>Rs.${data.price}</h3>
      {/* <button onClick={ADCdata}  >Add to Cart</button> */}

    </div>
  );
}

export default Productcard;
