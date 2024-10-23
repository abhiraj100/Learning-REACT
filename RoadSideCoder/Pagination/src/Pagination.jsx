import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setProducts(data);

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <div className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          {page > 1 && (
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀
            </span>
          )}
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          {page < Math.ceil(products.length / 10) && (
            <span
              onClick={() => selectPageHandler(page + 1)}
              className={
                page < products.length / 10 ? "" : "pagination__disable"
              }
            >
              ▶
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
