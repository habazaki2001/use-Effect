import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
const Content = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("posts");
  const [lists, setLists] = useState([]);
  const tam = [];
  useEffect(() => {
    function fetchAPI() {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((res) => res.json())
        .then((json) => {
          json.forEach((element) => {
            if (tam.length < 10) {
              tam.push(element);
            }
          });
          setLists(tam);
        });
    }
    fetchAPI();
  }, [type]);

  useEffect(() => {
    document.title = title;
  });
  return (
    <div>
      <h2>Tada List here</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            tab === type
              ? {
                  border: "none",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "#658aca"
                }
              : {
                  margin: "10px",
                  border: "none",
                  borderRadius: "2px"
                }
          }
        >
          {tab}
        </button>
      ))}
      <ul>
        {lists.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Content;
