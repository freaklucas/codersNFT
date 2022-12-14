import Head from 'next/head';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { NFTCard } from '../components/NFTCard';

export default function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  },[]);

  const filteredNfts = useMemo(() => {
    return nfts.filter((nft) => search ? 
      nft.name.toLowerCase().includes(search.toLowerCase()) : true)
  }, [search, nfts]);

  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-10 mb-12">
      <Head>
        <title>Coders NFT</title>
      </Head>
      <div className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">
          Discover
        </h2>

        <input 
          placeholder="Search item"
          className="h-12 w-34 p-4 rounded-xl" 
          onChange={handleSearch}
          value={search}
        />
      </div>
      
      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-center gap-7 mt-12">
        <h2 className="text-5xl font-bold">
          Popular Bid
        </h2>
      </div>

        <div className="flex flex-row justify-center items-center gap-5 mt-7 min-h-[50%] mb-12">
          {filteredNfts.map((nft) => (
            <NFTCard nft={nft} key={nft.id} />
          ))} 
        </div>
    </div>
  )
}

export const nfts = [
  {
      id: '1',
      name: '#4373',
      price: '0.3',
      author: '0xE51B77159',
      image: 'https://i.seadn.io/gae/kOxzFGpwUHKYI0TCTHtdo1fnh0hj3mqVTgAD55AZLIPWxTIkr2Xa0bgMMQY-mcC3REJ9C3bnqtt1GoM_FkhuCh7D6-o1WU-5TBB5?auto=format&w=384',
      description: 'NFT do menino ney'

  },
  {
      id: '2',
      name: '#4313',
      price: '0.31',
      author: '0xE51B77159',
      image: 'https://i.seadn.io/gae/HSq7RRwIfuAmn1GeYSoaPqG9DVw9R1Ai4A-e93giv4hCZM69kuEzm2Ll3qoEO41NELASpNcTdX2mVFqFuy9PKcxPr_Rk-Fc9_eTzqw?auto=format&w=384',
      description: 'NFT do menino ney'

  },
  {
      id: '3',
      name: '#4173',
      price: '0.9',
      author: '0xE51B77159',
      image: 'https://i.seadn.io/gae/A8cuZXyVNbfAb6PiQYRnfgbvZNJsKgTsJUZ-fNc47s9TNb4WdYd63jO8K9TMrjQ3ckuFTxthaMEXGa-bJG4QWdJfOuecE3mzUKms4w?auto=format&w=384',
      description: 'NFT do menino ney'

  },    {
      id: '4',
      name: '#4973',
      price: '0.2',
      author: '0xE51B77159',
      image: 'https://i.seadn.io/gae/Wjn95aaLy7m6twuXc1ot0_mAm_N-s4pSNIXmBpkx-D68QwSZ-jET9kKiWEuInsigfBhlGJDJlhdE7mHzDREQHRebWUTtmp2bYueKF4Q?auto=format&w=384',
      description: 'NFT do menino ney'

  },
]
