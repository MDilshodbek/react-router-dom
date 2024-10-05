import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

const Blogs = () => {
  const [data, setData] = useState([]);
  const hasChild = useOutlet();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        url: "https://jsonplaceholder.typicode.com/posts",
      });

      setData(response.data);
    };
    fetchData();
  }, []);

  if (hasChild) return <Outlet />;

  const onNavigate = (id) => {
    return navigate(`/blogs/${id}`);
  };

  return (
    <div>
      {data.map((value) => (
        <div
          key={value.id}
          className="flex items-center justify-center m-auto mt-4 gap-4 p-4 hover:bg-[#53708f] h-fit w-[500px] border"
          onClick={() => onNavigate(value.id)}
        >
          {value.title}
        </div>
      ))}
    </div>
  );
};

export default Blogs;
