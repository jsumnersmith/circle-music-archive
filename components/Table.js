const getSongLinkURL = (song) => {
  return song.YouTubeUrl || song.MP3Url || false;
}

const getSongLinkText = (song) => {
  return song.YouTube || song.MP3;
}

const getSongLyricsUrl = (song) => {
  return song["Lyrics/ChordsUrl"] || song.LyricsUrl || false;
}


export default ({songs}) => (
  <table className="w-5/6">
    <thead className="border-b-white border-b p-2">
      <tr>
        <th className="text-left p-3">Name</th>
        <th className="text-left p-3">Author</th>
        <th className="text-left p-3">Recording</th>
        <th className="p-3">Lyrics</th>
      </tr>
    </thead>
    <tbody>
      {songs.map(song =>
        <tr className="border-b-white border-b border-opacity-30">
          <td className="px-3 py-2">{song.name}</td>
          <td className="px-3 py-2"> </td>
          <td className="px-3 py-2">{ getSongLinkURL(song) ? <a href={getSongLinkURL(song)}>{getSongLinkText(song)}</a> : ""}  </td>
          <td className="px-3 py-2">{ getSongLyricsUrl(song) ? <a href={getSongLyricsUrl(song)}>Lyrics</a> : ""}  </td>
        </tr>  
      )}
    </tbody>
  </table>
)