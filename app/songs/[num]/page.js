import getSongs from "../../../lib/songs";
import Table from "../../../components/Table";


export default async function Page({params}) {
  const songs = await getSongs(params.num);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table songs={songs} />
    </main>
  )
}