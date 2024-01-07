import { Image } from '@nextui-org/react'

const Card = ({ style, movie }) => {
  return (
    <div style={style} className='flex h-14 w-[400px] items-center gap-4 p-1'>
      <Image
        className='h-12 w-auto'
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p className='truncate italic'>{movie.title}</p>
    </div>
  )
}

export default Card
