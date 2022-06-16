import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import useNews from '../../hooks/useNews';
import SearchBar from './../SearchBar';
import FeaturedNews from './../FeaturedNews';
import BreakingNews from './../BreakingNews';
import PoliticalNews from './../PoliticalNews';
import TechNews from './../TechNews';
import EntertainmentNews from './../EntertainmentNews';
import AppScreen from './../common/AppScreen';
import ActivityIndicator from '../common/ActivityIndicator';


const Home = () => {
  const [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
    loading
  ] = useNews();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <AppScreen>
        <SearchBar />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </AppScreen>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})