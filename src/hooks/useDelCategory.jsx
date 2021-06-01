import React, { useEffect, useState } from "react";
import categoryApi from '../api/categoryApi';

function useDelCategory () { 
    const [category, setCategory] = useState();

    const fectchData = async () => { 
        const resp = await categoryApi.deteleCategory();
        await setCategory(resp);
    }

    useEffect(() => {
        fectchData();
    }, [])

    return category;
}

export default useDelCategory;