import React, { useEffect, useState } from "react";

const CocktailView = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        updateData();
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key":
              "1",
          },
        });
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    const updateData = () => {
      setUrl("https://the-cocktail-db.p.rapidapi.com/1/filter.php?i=Gin");
    };
    fetchData();
  }, [url]);

  return <div></div>;
};

export default CocktailView;
