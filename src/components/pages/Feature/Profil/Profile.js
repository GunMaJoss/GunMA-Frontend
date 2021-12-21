import React, { useEffect, useState } from "react";
import './DetailProfil.css';
import axios from "axios";

export default function Profile() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
          .get('https://api.gunma.my.id/api/v1/detail-profile/')
          .then((res) => {
              console.log(res.data);
              setData(res.data);              
          })
          .catch((err) => {
              console.log(err);
          }); 
  }, []);
  
        return (
            <h></h>   
        );
      }