import clientPromise from "./mongodb"

const getCount = async () => {
    try {        
        const client = await clientPromise;
        const db = client.db("music");
 
        const count = await db
            .collection("songs")
            .count({ name: { $ne: ""} })
         return count;
    } catch (e) {
      console.error(e);
    }
 };

export default getCount;