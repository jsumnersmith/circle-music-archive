import getSongs from "../../../lib/songs";
import getCount from "../../../lib/count";
import Table from "../../../components/Table";
import Search from "../../../components/Search";

export default async function Page({params}) {
  const songs = await getSongs(params.num);
  const count = await getCount();
  const num = Number(params.num);

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Search />
      <Table songs={songs} count={count} num={num}/>
    </main>
  )
}

