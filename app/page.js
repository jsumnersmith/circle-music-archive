import getSongs from "../lib/songs";
import getCount from "../lib/count";
import Table from "../components/Table";
import Search from "../components/Search";


export default async function Home() {
  const songs = await getSongs();
  const count = await getCount();
  const num = 1;

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Search initialSearch='' />
      <Table songs={songs} count={count} num={num}/>
    </main>
  )
}