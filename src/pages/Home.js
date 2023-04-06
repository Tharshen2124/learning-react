/* import { useContext } from "react";
import { AppContext } from '../Routing'; */
import Axios from "axios";
import  { useQuery } from '@tanstack/react-query'

export default function Home() {
/*   const { username } = useContext(AppContext); */
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if(isLoading) {
    return <h1>Loading...</h1>;
  }

  if(isError) {
    return <h1>Error lol</h1>
  }
  
  return (
    <>
        <h1>Home Page</h1>
        {/* <h2>{username}</h2> */}
        <p>{data?.fact}</p>
        <button onClick={refetch}>Update Data</button>
    </>
  )
}
