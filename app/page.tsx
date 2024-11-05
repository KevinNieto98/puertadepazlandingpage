import { redirect } from "next/navigation";


export default async function Home() {

  redirect('/home');

  return (
    <>
      <h1>
        Hola Mundo
      </h1>
    </>
  );
}
