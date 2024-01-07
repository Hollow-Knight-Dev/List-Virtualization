import Card from '../Card'

const MovieBefore = ({ movies }) => {
  return (
    <div className='flex w-full flex-col overflow-y-scroll'>
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  )
}

export default MovieBefore
