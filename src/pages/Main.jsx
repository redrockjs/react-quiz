import {useEffect} from "react";

export const Main = () => {
  useEffect(() => {
      console.log('Main loaded!')
    }
  )

  return (
    <main>Main page</main>
  );
}
