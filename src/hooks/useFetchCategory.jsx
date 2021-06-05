import { useEffect, useState } from "react";
import categoryApi from "../api/categoryApi";

function useFetchCategory() {
  const [category, setCategory] = useState();
  
  const fetchApi = async () => {
    const resp = await categoryApi.getAllCategory();
    setCategory(resp);
  };
  
  useEffect(() => {
    fetchApi();
  }, []);

  return category;
}

export default useFetchCategory;
