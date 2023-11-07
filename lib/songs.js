import clientPromise from "./mongodb"

const getSongs = async (page) => {
    try {
        const skip = page ? (page - 1) * 25 : 0;
        
        const client = await clientPromise;
        const db = client.db("music");
 
        const songs = await db
            .collection("songs")
            .find({ name: { $ne: ""} })
            .sort({ name: 1 })
            .limit(25)
            .skip(skip)
            .toArray();
         return songs;
    } catch (e) {
      console.error(e);
    }
 };

export default getSongs;