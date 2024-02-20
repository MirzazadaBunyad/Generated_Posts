import { useQuery } from "@tanstack/react-query";
import "../App.css";
import { getPosts } from "../api/axios";
import { useState } from "react";
import { nanoid } from "nanoid";

const Posts = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["/posts", page],
      queryFn: () => getPosts(page),
      keepPreviousData: true,
    });

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const newFetch = (
    <div className="posts">
      {data?.map((post) => (
        <div className="post" key={nanoid()}>
          <p>{post.id}.</p>
          <h3>{capitalizeFirstLetter(post.title)}</h3>
          <p>{capitalizeFirstLetter(post.body)}</p>
        </div>
      ))}
    </div>
  );

  const isPostFetched = () => {
    if (isLoading || isFetching) {
      return <p className="loading">Loading Posts...</p>;
    } else if (isError) {
      return (
        <p style={{ color: "white", fontSize: "30px", marginTop: "20px" }}>
          The Error is: {error?.message}
        </p>
      );
    } else {
      return newFetch;
    }
  };

  const prevPage = () => setPage((prev) => prev - 1);
  const pageOne = () => setPage(1);
  const pageTwo = () => setPage(2);
  const pageThree = () => setPage(3);
  const pageFour = () => setPage(4);
  const pageFive = () => setPage(5);
  const pageTen = () => setPage(10);
  const nextPage = () => setPage((next) => next + 1);

  return (
    <div className="posts__section">
      <div className="pages__section">
        <p className="show-page-num">Page {page}</p>
        <button onClick={prevPage} disabled={isPreviousData || page === 1}>
          Prev
        </button>
        <button onClick={pageOne}>1</button>
        <button onClick={pageTwo}>2</button>
        <button onClick={pageThree}>3</button>
        <button onClick={pageFour}>4</button>
        <button onClick={pageFive}>5</button>
        <p className="dots">...</p>
        <button onClick={pageTen}>10</button>
        <button onClick={nextPage} disabled={isPreviousData || page === 10}>
          Next
        </button>
      </div>

      <div className="blog__posts">{isPostFetched()}</div>
    </div>
  );
};
export default Posts;
