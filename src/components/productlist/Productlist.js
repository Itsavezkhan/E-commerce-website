import React, { useEffect, useState } from "react";
import "./Productlist.css";
import { useCustom } from "../context/context";
import Product from "../product/Product";
import Filter from "../filter/Filter"
import FilterComponent from "../filter/FilterComponent";

const Productlist = () => {

  const [FilterClick, setFilterClick] = useState(false)

  const FilterToggle = () => {
    setFilterClick(!FilterClick)
  }
  const {
    weproducts,
    filterstate: { sort, cate, byrating, sorting, price },
    filterdispatch,
    dispatch,
  } = useCustom();
  console.log(sorting);
  let NewProducts = weproducts;

  const TransformProducts = () => {
    let NewProducts = weproducts;
    if (cate) {
      NewProducts = NewProducts.filter((elem) => {
        return elem.category === cate;
      });
    }
    if (sort) {
      NewProducts = NewProducts.sort((a, b) => {
        return sort === "asec" ? a.price - b.price : b.price - a.price;
      });
    } else if (cate === "hall") {
      NewProducts = weproducts;
    }
    if (byrating) {
      NewProducts = NewProducts.filter((elem) => {
        return elem.rating?.rate >= byrating;
      });
    }
    if (sorting) {
      NewProducts = NewProducts.filter((product) => {
        return product.title.toLowerCase().includes(sorting);
      });
    }
    if (price) {
      NewProducts = NewProducts.filter((product) => {
        return product.price <= price;
      })
    }

    console.log(NewProducts);

    return NewProducts;
  };

  return (
    <>
      <div className="products_page">
        <Filter FilterClick={FilterClick}/>
        <FilterComponent FilterToggle={FilterToggle}/>
        <div className="prolistcont">
          {TransformProducts()?.map((prod) => {
            return <Product {...prod} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Productlist;
