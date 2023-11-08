import Search from '../../components/Search'
import Table from '../../components/Table'
import searchSongs from '../../lib/search';

export default async function Page({params, searchParams}) {
  const { q } = searchParams;
  const songs = await searchSongs(q);

  return (
    <div>
      <Search initialSearch={q}/>
      <Table songs={songs} num={1} count={songs.length}/>
    </div>
  )
}