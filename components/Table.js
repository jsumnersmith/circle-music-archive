import Link from "next/link";
import { Fragment } from "react";

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
  <Link href={num >= (max + 1) ? `` : `/songs/${num + 1}`} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 text-sm rounded-sm text-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300" disabled={num >= (max + 1)}>Next</Link>
)

const PreviousButton = ({num, max}) => (
  <Link href={num <= 1 ? `` : `/songs/${num - 1}`} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 text-sm rounded-sm text-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300" disabled={num <= 1}>Previous</Link>
)

export default function Table ({songs, count, num}) {
  const max = Math.floor(count/25);

  return (
    <Fragment>
      <div className="flex items-center justify-between gap-3 w-full mb-6">
        <PreviousButton num={num} max={max} />
        <NextButton num={num} max={max} />
      </div>
      <table className="w-full">
        <thead className="border-b-white border-b p-2">
          <tr>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Author</th>
            <th className="text-left p-3">Recording</th>
            <th className="text-right p-3">Lyrics</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song =>
            <tr className="border-b-white border-b border-opacity-30" key={song.id}>
              <td className="px-3 py-2">{song.name}</td>
              <td className="px-3 py-2"> </td>
              <td className="px-3 py-2">{ getSongLinkURL(song) ? <a href={getSongLinkURL(song)} className="text-yellow-500 hover:underline" target="blank">{getSongLinkText(song)}</a> : ""}  </td>
              <td className="px-3 py-2 text-right">{ getSongLyricsUrl(song) ? <a href={getSongLyricsUrl(song)} className="text-yellow-500 hover:underline" target="blank">Lyrics</a> : ""}  </td>
            </tr>  
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center w-full mt-6">
        <PreviousButton num={num} max={max} />
        <p>{((num - 1) * 25) + 1} - {num * 25 < count ? num * 25 : count} of {count}</p>
        <NextButton num={num} max={max} />
      </div>
    </Fragment>
  )
}

