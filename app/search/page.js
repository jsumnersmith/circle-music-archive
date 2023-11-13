import Search from '../../components/Search'
import Table from '../../components/Table'
import searchSongs from '../../lib/search';
import { Music, Speaker, Sliders } from 'react-feather';

export default async function Page({params, searchParams}) {
  const { q } = searchParams;
  const songs = await searchSongs(q);

  return (
    <div>
      <Search initialSearch={q}/>
      {songs?.length < 1 ? 
          <div className="w-full bg-white rounded-md p-4 flex flex-col justify-center items-center">
              <div className="flex gap-3 mb-3">
                <span className="bg-gray-100 text-gray-600 rounded-full p-3"> <Music /> </span>
                <span className="bg-gray-100 text-gray-600 rounded-full p-3"><Sliders/></span>
                <span className="bg-gray-100 text-gray-600 rounded-full p-3"><Speaker/></span>
              </div>
              <p className="text-xl">We couldn't find any songs for "{q}"</p>
            </div>
        : 
          <Table songs={songs} num={1} count={songs?.length}/>
      }
      
    </div>
  )
}