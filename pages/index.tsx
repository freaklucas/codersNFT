import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-full w-screen bg-[#1d1f2b]">
      <Head>
        <title>Coders NFT</title>
      </Head>
      <div className="px-24 flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">
          Discover
        </h2>

        <input 
          placeholder="Search item"
          className="h-12 w-64 p-4 rounded-xl" 
        
        />
      </div>
      <hr className="w-full border-[#242634]" />

      <div className="flex-col items-start gap-7 px-24 mt-12">
        <h2 className="text-5xl font-bold">
          Popular Bid
        </h2>
      </div>

    </div>
  )
}
