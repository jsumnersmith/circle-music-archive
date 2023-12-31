import clientPromise from "../../../lib/mongodb"

export const dynamic = 'force-dynamic'

export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams
        const page = searchParams.get('page')
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
         return Response.json({ songs })
    } catch (e) {
      return Response.error(e)
    }
 };
