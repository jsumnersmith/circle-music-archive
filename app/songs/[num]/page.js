import getSongs from "../../../lib/songs";
import getCount from "../../../lib/count";
import Table from "../../../components/Table";
import Link from "next/link";
import { Fragment } from "react";

export default async function Page({params}) {
  const songs = await getSongs(params.num);
  const count = await getCount();
  const num = Number(params.num);
  const max = Math.floor(count/25);

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div className="flex items-center justify-between gap-3 w-full mb-6">
        <PreviousButton num={num} max={max} />
        <NextButton num={num} max={max} />
      </div>
      <Table songs={songs} />
      <div className="flex justify-between items-center w-full mt-6">
        <PreviousButton num={num} max={max} />
        <p>{((num - 1) * 25) + 1} - {num * 25 < count ? num * 25 : count} of {count}</p>
        <NextButton num={num} max={max} />
      </div>
    </main>
  )
}

const NextButton = ({num, max}) => (
  <>{num >= (max + 1) ? <Fragment></Fragment> : <Link href={`/songs/${num + 1}`} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 text-sm rounded-sm text-gray-800">Next</Link>}</>
)

const PreviousButton = ({num, max}) => (
  <>{num <= 1 ? <Fragment></Fragment> : <Link href={`/songs/${num - 1}`} className="bg-gray-200 hover:bg-gray-300 px-2 py-1 text-sm rounded-sm text-gray-800">Previous</Link>}</>
)