"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://fakestoreapi.com/products")
            setData(res.data);
        }
        fetchData();
    }, [])



  return (
  <div>
    {
        data.map((item) => (
            <div key={item.id}>
                <h1>{item.title}</h1>
            </div>
        ))
    }
  </div>
  );
}
