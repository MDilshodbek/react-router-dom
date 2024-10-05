import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        url: `https://jsonplaceholder.typicode.com/posts/${blogId}`,
      });

      setBlog(data);
    };
    fetchData();
  }, [blogId]);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <h1>{blog?.body}</h1>
    </div>
  );
};

export default BlogDetails;
