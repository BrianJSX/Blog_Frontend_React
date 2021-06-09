import { useEffect, useState } from "react";
import categoryApi from "../api/categoryApi";

function useSelectCategory() {
  const [category, setCategory] = useState();
  
  const fetchApi = async () => {
    const resp = await categoryApi.getAllCategoryIndex();
    setCategory(resp);
  };
  
  useEffect(() => {
    fetchApi();
  }, []);

  return category;
}

export default useSelectCategory;