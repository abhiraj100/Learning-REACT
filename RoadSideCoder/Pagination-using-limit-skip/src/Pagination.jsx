import React, { useState, useEffect } from "react";
import "./App.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 10)); // Ensure you have the total count
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => (
            <div className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </div>
          ))}
        </div>
      )}

      {totalPages > 0 && (
        <div className="pagination">
          {page > 1 && (
            <span
              onClick={() => selectPageHandler(page - 1)}
              className={page > 1 ? "" : "pagination__disable"}
            >
              ◀
            </span>
          )}
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={page === i + 1 ? "pagination__selected" : ""}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          {page < totalPages && (
            <span
              onClick={() => selectPageHandler(page + 1)}
              className={page < totalPages ? "" : "pagination__disable"}
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


// import React from "react";
// import "./App.css";
// import { useState, useEffect } from "react";

// const Pagination = () => {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   const fetchProducts = async () => {
//     const response = await fetch(
//       `https://dummyjson.com/products?limit=10&skip=${page - 10 * 10}`,
//       {
//         method: "GET",
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//     setProducts(data);

//     if (data && data.products) {
//       setProducts(data.products);
//       setTotalPages(Math.ceil(data.total / 10)); // Calculate total pages correctly
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [page]);

//   const selectPageHandler = (selectedPage) => {
//     if (
//       selectedPage >= 1 &&
//       selectedPage <= totalPages / 10 &&
//       selectedPage !== page
//     ) {
//       setPage(selectedPage);
//     }
//   };

//   return (
//     <div>
//       {products.length > 0 && (
//         <div className="products">
//           {products.map((prod) => {
//             return (
//               <div className="products__single" key={prod.id}>
//                 <img src={prod.thumbnail} alt={prod.title} />
//                 <span>{prod.title}</span>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {products.length > 0 && (
//         <div className="pagination">
//           (
//             <span
//               onClick={() => selectPageHandler(page - 1)}
//               className={page > 1 ? "" : "pagination__disable"}
//             >
//               ◀
//             </span>
//           )
//           {[...Array(totalPages)].map((_, i) => {
//             return (
//               <span
//                 key={i}
//                 className={page === i + 1 ? "pagination__selected" : ""}
//                 onClick={() => selectPageHandler(i + 1)}
//               >
//                 {i + 1}
//               </span>
//             );
//           })}
//         (
//             <span
//               onClick={() => selectPageHandler(page + 1)}
//               className={page < totalPages ? "" : "pagination__disable"}
//             >
//               ▶
//             </span>
//           )
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pagination;
