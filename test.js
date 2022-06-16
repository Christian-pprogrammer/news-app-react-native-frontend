import React from 'react'
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';
import BlockCard from './app/components/BlockCard';
import FeaturedNews from './app/components/FeaturedNews';
import SmallCard from './app/components/SmallCard';
import BreakingNews from './app/components/BreakingNews';
import FlatCard from './app/components/FlatCard';
import PoliticalNews from './app/components/PoliticalNews';

import data from './FakeData';
import TechNews from './app/components/TechNews';
import EntertainmentNews from './app/components/EntertainmentNews';


export default function App() {
  const breakingNews = data.filter(item=>item.category == "breaking-news")
  const techNews = data.filter(item => item.category == "tech");
  const politicalNews = data.filter(item => item.category == "political");
  const entertainmentNews = data.filter(item => item.category == "entertainment");
  return (
    <Screen>
      <SearchBar />
        <FeaturedNews item={{id: "1",
          title: "This is the title no one.",
          desc:
            "Desc is the short form of description and this format is the actual same as our real database.",
          thumbnail: "http://lorempixel.com/400/200/",
          category: "breaking-news"}} />
      <BreakingNews data={breakingNews} />
      <TechNews data={techNews} />
      <PoliticalNews data={politicalNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
}
