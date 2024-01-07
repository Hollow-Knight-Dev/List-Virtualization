const fetchApi = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=3d334b937fea66269fedd8b7e3531b75&language=en-US&page=${page}`
    )
    const movieData = await response.json()
    return movieData.results
  } catch (error) {
    console.error('Fetch TMDB api error:', error)
  }
}

export const fetchApis = async () => {
  const pagesTofetch = 10
  const arrs = [...Array(pagesTofetch)].map((_, index) => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const data = await fetchApi(index + 1)
        resolve(data)
      }, 2000)
    })
  })
  return Promise.all(arrs).then((values) => values.flat(Infinity))
}
