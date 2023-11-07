import getSongs from "../lib/songs";
import Table from "../components/Table";


export default async function Home() {
  const songs = await getSongs();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Table songs={songs} />
    </main>
  )
}
