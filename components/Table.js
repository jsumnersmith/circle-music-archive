const getSongLinkURL = (song) => {
  return song.YouTubeUrl || song.MP3Url || false;
}

const getSongLinkText = (song) => {
  return song.YouTube || song.MP3;
}

const getSongLyricsUrl = (song) => {
  return song["Lyrics/ChordsUrl"] || song.LyricsUrl || false;
}


export default Table = ({songs}) => (
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
)