import React from "react";

const Pagination = ({ pageNo, setPageNo }) => {
  const prevThreeNoArr = Array.from(
    { length: 3 },
    (_, index) => pageNo - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();
  // 5 - 1 - 0 => 4
  // 5 - 1 - 1 => 3
  // 5 - 1 - 2 => 2
  // console.log(prevThreeNoArr);

  const nextFourNoArr = Array.from({ length: 4 }, (_, index) => pageNo + index);
  // console.log(nextFourNoArr);
  console.log([...prevThreeNoArr, ...nextFourNoArr]);

  const paginationArr = [...prevThreeNoArr, ...nextFourNoArr];

  const handlePrev = () => {
    if (pageNo >= 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div className="pagination-container">
      {pageNo > 1 && (
        <div onClick={handlePrev} className="page-btn">
          {"<"}
        </div>
      )}
      {paginationArr.map((value) => {
        return <div onClick={() => setPageNo(value)} key={value} className={value == pageNo ? "page-btn active" : "page-btn"}>{value}</div>;
      })}
      <div onClick={handleNext} className="page-btn">
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
