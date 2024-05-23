import { useEffect } from "react";

export const Practice = () => {
  let API = "https://dummyjson.com/products";
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API);
  }, []);
  return (
    <>
      <h2>Muhammad Imran</h2>
    </>
  );
};
