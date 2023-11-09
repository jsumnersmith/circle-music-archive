import Link from "next/link";
import { Fragment } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const getSongLinkURL = (song) => {
  return song.YouTubeUrl || song.MP3Url || false;
}

const getSongLinkText = (song) => {
  return song.YouTube || song.MP3;
}

const getSongLyricsUrl = (song) => {
  return song["Lyrics/ChordsUrl"] || song.LyricsUrl || false;
}

const NextButton = ({num, max}) => (
  <Link href={num >= (max + 1) ? `` : `/songs/${num + 1}`} className={`button-shadow bg-white hover:bg-opacity-70 px-5 py-2 text-md rounded-md flex gap-2 items-center ${ num >= (max + 1) ? "cursor-not-allowed": ""}`} disabled={num >= (max + 1)}>Next <ChevronRight height={20}/></Link>
)

const PreviousButton = ({num, max}) => (
  <Link href={num <= 1 ? `` : `/songs/${num - 1}`} className={`button-shadow bg-white hover:bg-opacity-70 px-5 py-2 text-md rounded-md flex gap-2 items-center ${ num <= 1 ? "cursor-not-allowed" : ""}`} disabled={num <= 1}><ChevronLeft height={20}/> Previous</Link>
)

export default function Table ({songs, count, num}) {
  const max = Math.floor(count/25);

  return (
    <Fragment>
      {/* <div className="flex items-center justify-between gap-3 w-full mb-6">
        <PreviousButton num={num} max={max} />
        <NextButton num={num} max={max} />
      </div> */}
      <table className="w-full bg-white rounded-md">
        <thead className="border-b-cool-gray-200 border-b p-2">
          <tr>
            <th className="text-left p-3 pl-6 hidden md:table-cell">Name</th>
            <th className="text-left p-3 hidden md:table-cell">Artist</th>
            <th className="text-left p-3 hidden md:table-cell">Recording</th>
            <th className="text-right p-3 pr-8 hidden md:table-cell ">Lyrics</th>
            <th className="text-left p-3 pl-6 table-cell md:hidden">Details</th>
            <th className="text-right p-3 pr-8 table-cell md:hidden ">Resources</th>
          </tr>
        </thead>
        <tbody className="p-2">
          {songs?.map(song =>
            <tr className="border-b-gray-300 border-b border-opacity-60" key={song.id}>
              <td className="p-3 pl-6 font-semibold hidden md:table-cell">{song.name}</td>
              <td className="p-3 hidden md:table-cell">{song.Artist}</td>
              <td className="p-3 hidden md:table-cell">{ getSongLinkURL(song) ? <a href={getSongLinkURL(song)} className="text-blue-600 hover:underline" target="blank">{getSongLinkText(song)}</a> : ""}  </td>
              <td className="p-3 pr-8 text-right hidden md:table-cell">{ getSongLyricsUrl(song) ? <a href={getSongLyricsUrl(song)} className="text-blue-600 hover:underline" target="blank">Lyrics</a> : ""}  </td>
              <td className="p-3 pl-6 table-cell md:hidden">
                <div className="font-semibold">{song.name}</div>
                <div className="text-gray-500">{song.Artist ? `by ${song.Artist}` : ""}</div>
              </td>
              <td className="p-3 pr-8 text-right visible md:hidden">
                <div className="mb-4">{ getSongLinkURL(song) ? <a href={getSongLinkURL(song)} className="text-blue-600 hover:underline" target="blank">{getSongLinkText(song)}</a> : "No Recording"}</div>
                <div>{ getSongLyricsUrl(song) ? <a href={getSongLyricsUrl(song)} className="text-blue-600 hover:underline" target="blank">Lyrics</a> : "No Lyrics"}  </div>
              </td>
            </tr>  
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center w-full my-6">
        <PreviousButton num={num} max={max} />
        <p>{((num - 1) * 25) + 1} - {num * 25 < count ? num * 25 : count} of {count}</p>
        <NextButton num={num} max={max} />
      </div>
    </Fragment>
  )
}

