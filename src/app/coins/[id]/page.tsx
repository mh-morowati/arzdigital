"use client"
import { apiService } from "@/api/services";
import { useEffect } from "react";

interface ProductProps {
    params: {
      id?: string;
    };
  }

const Currency: React.FC<ProductProps> = ( {params}) => {
    const id = params.id || ''

    useEffect(() => {
    // get countries from server
    (
      async () => {
        try {
          const response = await apiService.getCurrencyFocus(id)
          console.log(response.data)
        }
        catch (err) {
          console.error(err)
        }
      }
    )()
  }, [id])

    return ( <h1>{id}</h1> );
}

export default Currency;