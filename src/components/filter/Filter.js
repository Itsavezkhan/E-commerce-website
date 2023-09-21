import React from 'react'
import { useCustom } from '../context/context';
import Rating from "./Rating";
import { useState } from 'react';
import './Filter.css'

const Filter = ({FilterClick}) => {

    const [rate, setRate] = useState();
    const {
      weproducts,
      filterstate: { sort, cate, byrating, sorting, minPrice, maxPrice, price, currentPrice },
      filterdispatch,
      dispatch,
      handlePriceRange,
    } = useCustom();
  
    const Soritng = (event) => {
      filterdispatch({ type: "FILTER_BY_PRICE", payload: event.target.value });
    };
  return (
    <>
     <div className={FilterClick ? "filter" : 'filternone'}>
          <h2>filters</h2>
          <div className="sortby">
            <h3>sort by price:</h3>
            <form action="#">
              <label>Ascending</label>
              <input
                type="radio"
                id="asec"
                name="asec"
                value="asec"
                onChange={() =>
                  filterdispatch({ type: "SORT_BY_VALUE", payload: "asec" })
                }
                checked={sort === "asec" ? true : false}
              />
              <label>Dscending</label>
              <input
                type="radio"
                id="dsec"
                name="asec"
                value="dsec"
                onChange={() =>
                  filterdispatch({ type: "SORT_BY_VALUE", payload: "dsec" })
                }
                checked={sort === "dsec" ? true : false}
              />
            </form>
          </div>

          <div className="categories">
            <h3>sort by categories:</h3>
            <button
              onClick={() =>
                filterdispatch({ type: "CATEGORY_SORT", payload: "jewelery" })
              }
            >
              Jewellery
            </button>
            <button
              onClick={() =>
                filterdispatch({
                  type: "CATEGORY_SORT",
                  payload: "women's clothing",
                })
              }
            >
              Women's items
            </button>
            <button
              onClick={() =>
                filterdispatch({
                  type: "CATEGORY_SORT",
                  payload: "men's clothing",
                })
              }
            >
              Men's items
            </button>
            <button
              onClick={() =>
                filterdispatch({
                  type: "CATEGORY_SORT",
                  payload: "electronics",
                })
              }
            >
              electronics
            </button>
            <button
              onClick={() =>
                filterdispatch({ type: "CLEAR_FILTER", payload: "all" })
              }
            >
              clear all
            </button>
          </div>

          <div className="rating_comp">
            <h3>sort by rating:</h3>
            <Rating
              rate={byrating}
              onCLick={(i) =>
                filterdispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
              }
            />
          </div>

          <div className='PR_handle'>
            <h3>Price range:</h3>

            <h5>{price}</h5>
            <input 
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handlePriceRange}
            />
          </div>
        </div>
      
    </>
  )
}

export default Filter
