import clientPromise from "./mongodb"

const searchSongs = async (search, page = 1) => {
    try {
        const skip = page ? (page - 1) * 25 : 0;
        
        const client = await clientPromise;
        const db = client.db("music");
 
        const songs = await db
            .collection("songs")
            .aggregate([{ $search: {
              "index": 'text_search',
              "phrase": {
                "query": search,
                "path": ["name", "Artist"]
              }
            }}, {
              $limit: 25
            }])
            .toArray();
         return songs;
    } catch (e) {
      console.error(e);
    }
 };

export default searchSongs;