import { useEffect, useState } from "react";
import "./styles.css";
import User from "./User";
import Pagination from "./Pagination";
export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
  fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);


 
  const handleDelete = (index) => {
    setData(data.filter((item, i) => i !== index));
    // console.log(e);
  };

  const search = (data) => {
    const keys = ["name", "email", "role"];
    return currentPosts.filter((item) =>
      // item.name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query) ||
      // item.role.toLowerCase().includes(query)
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  console.log(query);
  return (
    <div className="App">
      <h1>test run</h1>
      <User
        userData={search(currentPosts)}
        setQuery={setQuery}
        handleDelete={handleDelete}
        setData={setData}
        data={data}
      />
      <Pagination
        totalPosts={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
