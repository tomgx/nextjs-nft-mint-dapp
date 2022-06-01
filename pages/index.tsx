import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>

      <Image src={topImage} alt={projectConfig.nftName} />

      <div className="bg-gray-800 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">{projectConfig.nftName}</h1>
          <p className="text-xl">
          A uniquely generated collective set of Chonky Cat NFTs to used in our 
          storyline driven P2E game using staking & DeFi. Our vision is to create 
          a journey for your Chonky Cat unlocking new items, new goals & delivering 
          a fun story driven experience along the way. You will earn our token by 
          staking your cat along with other NFT items released & required along the way. 
          The more staked the more rewards. The higher the rarity the higher the earnings! 
          Our token will be used to buy & sell NFTs on the market once minted during each 
          Chapter release as well as rewarding holders of either our token or NFT collections. 
          </p>
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
