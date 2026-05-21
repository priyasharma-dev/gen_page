const MOVIE_HERO_SUGGESTIONS = [
  "best thriller movies to watch tonight",
  "psychological thrillers on Netflix",
  "mind bending crime movies",
  "dark suspense movies with twist ending",
];

const MOVIE_SOURCE_CHIPS = [
  { label: "IMDb", tone: "imdb" },
  { label: "Rotten Tomatoes", tone: "rt" },
  { label: "Reddit", tone: "reddit" },
  { label: "+2 more", tone: "muted" },
];

const MOVIE_RESULTS = [
  {
    id: "movie-prisoners",
    rank: 1,
    title: "Prisoners",
    year: "2013",
    runtime: "2h 33m",
    genres: ["Crime", "Thriller", "Drama"],
    rating: "8.1",
    source: "IMDb",
    description:
      "A gripping thriller about a father's desperate search for his missing daughter. Intense performances and a brilliant plot.",
    ansiReason:
      "High tension from start to finish with unpredictable twists.",
    tags: ["Dark", "Psychological", "Suspenseful"],
    platformLabel: "Available on",
    platform: "Prime Video",
    platformTone: "prime",
    image:
      "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
  },
  {
    id: "movie-gone-girl",
    rank: 2,
    title: "Gone Girl",
    year: "2014",
    runtime: "2h 29m",
    genres: ["Mystery", "Thriller", "Drama"],
    rating: "8.1",
    source: "IMDb",
    description:
      "A mind-bending story of a missing wife and a husband who becomes the prime suspect.",
    ansiReason:
      "Perfect mix of mystery, suspense and shocking revelations.",
    tags: ["Mind-bending", "Dark", "Twist Ending"],
    platformLabel: "Available on",
    platform: "Netflix",
    platformTone: "netflix",
    image:
      "https://image.tmdb.org/t/p/w500/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
  },
  {
    id: "movie-zodiac",
    rank: 3,
    title: "Zodiac",
    year: "2007",
    runtime: "2h 37m",
    genres: ["Crime", "Drama", "Mystery"],
    rating: "8.0",
    source: "IMDb",
    description:
      "A serial killer thriller that keeps you guessing till the end. Based on real events.",
    ansiReason:
      "Slow-burn tension with one of the best investigations in cinema.",
    tags: ["Real Events", "Intense", "Psychological"],
    platformLabel: "Available on",
    platform: "Prime Video",
    platformTone: "prime",
    image:
      "https://image.tmdb.org/t/p/w500/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
  },
  {
    id: "movie-shutter-island",
    rank: 4,
    title: "Shutter Island",
    year: "2010",
    runtime: "2h 18m",
    genres: ["Mystery", "Thriller"],
    rating: "8.2",
    source: "IMDb",
    description:
      "A U.S. Marshal investigates a disappearance at a mental hospital on a remote island.",
    ansiReason:
      "Atmospheric, suspenseful and a legendary twist ending.",
    tags: ["Mind-bending", "Psychological", "Twist Ending"],
    platformLabel: "Available on",
    platform: "Apple TV",
    platformTone: "apple",
    image:
      "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
  },
];

const MOVIE_SOURCES = [
  {
    title: "Best Thriller Movies According to IMDb",
    domain: "imdb.com",
    logo: "IMDb",
    url: "https://www.imdb.com/list/ls009236153/",
  },
  {
    title: "Top 25 Thriller Movies of All Time",
    domain: "rottentomatoes.com",
    logo: "RT",
    url: "https://editorial.rottentomatoes.com/guide/best-thrillers-of-all-time/",
  },
  {
    title: "Reddit: Best thrillers worth watching",
    domain: "reddit.com",
    logo: "R",
    url: "https://www.reddit.com/r/movies/",
  },
];

const MOVIE_LOOKED_AT_SITES = ["IMDb", "RT", "Reddit", "Letterboxd", "+4"];

const MOVIE_RELATED_SEARCHES = [
  "Mind bending movies like Inception",
  "Best psychological thrillers on Netflix",
  "Top rated crime thriller movies",
  "Thrillers with unexpected ending",
  "Best detective movies to watch",
];

const MOVIE_COLLECTIONS = [
  {
    title: "Must Watch Thrillers",
    count: "12 movies",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Twist Ending Masterpieces",
    count: "15 movies",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Crime Thriller Classics",
    count: "20 movies",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
  },
];

const MOVIE_INSIGHTS = [
  {
    title: "Psychological thrillers",
    body: "have the highest watch completion at night.",
  },
  {
    title: "Movies with twist endings",
    body: "are trending 2.3x more this week.",
  },
  {
    title: "Viewers who like Dark",
    body: "also enjoy these types of slow burn thrillers.",
  },
];

const MOVIE_PLATFORMS = [
  "Netflix",
  "Prime Video",
  "Apple TV",
  "Disney+ Hotstar",
  "Lionsgate Play",
  "YouTube Movies",
];

function detectMovieTheme(query = "", resolvedQuery = null) {
  const normalized = String(query || "").toLowerCase();
  const productType = resolvedQuery?.entities?.productType;

  if (productType === "thriller movies" || /\bthriller\b/.test(normalized)) {
    return "thriller movies";
  }

  if (/\bcrime\b/.test(normalized)) {
    return "crime movies";
  }

  return "movies";
}

const movieData = {
  getHeroSuggestions() {
    return MOVIE_HERO_SUGGESTIONS;
  },
  getSearchExperienceContent(query = "", resolvedQuery = null) {
    const theme = detectMovieTheme(query, resolvedQuery);

    return {
      promptTitle: query || "Best thriller movies to watch tonight",
      lookedAtSites: MOVIE_LOOKED_AT_SITES,
      sourceChips: MOVIE_SOURCE_CHIPS,
      topRatedProducts: MOVIE_RESULTS,
      results: MOVIE_RESULTS,
      topSources: MOVIE_SOURCES,
      relatedSearches: MOVIE_RELATED_SEARCHES,
      collections: MOVIE_COLLECTIONS,
      insights: MOVIE_INSIGHTS,
      platforms: MOVIE_PLATFORMS,
      websitePanelTitle: "Best Thriller Movies Sources",
      conversationalReply: {
        intro: `For tonight, I've picked psychological thrillers and suspenseful ${theme} with high ratings, strong storylines, and edge-of-your-seat moments.`,
      },
      sections: [
        {
          id: "movie-thrillers",
          title: "Top Thriller Movies Recommended for Tonight",
          description:
            "Curated by ANSI based on ratings, popularity & viewer sentiment.",
          products: MOVIE_RESULTS,
        },
      ],
    };
  },
};

export default movieData;
