'use client';
import { Welcome } from '../components/Welcome/Welcome';
import { Header } from '../components/Header/Header';
import MovieCarousel from '../components/MovieCarousel/MovieCarousel';
import '@mantine/carousel/styles.css';
import './home.css';
import { useState, useEffect, use } from 'react';
require('dotenv').config();

const API_ID = process.env.NEXT_PUBLIC_API_Key;

export default function HomePage() {
  useEffect(() => {
    getTrendingMovies();
    console.log({ API_ID });
    console.log(process.env);
  }, []);

  const [TrendingMovies, setTrendingMovies] = useState();
  // Trending movies fetch
  async function getTrendingMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_ID}`
    );
    const TrendingData = await response.json();
    setTrendingMovies(TrendingData.results);
    console.log(TrendingData.results);
    console.log(TrendingMovies);
  }

  return (
    <div className="Home">
      <Header />
      <Welcome />
      <MovieCarousel props={TrendingMovies} />
    </div>
  );
}
