const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
   //creating buttons for paginations
    pages.push(i);
  }
  // console.log(postPerPage);
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
