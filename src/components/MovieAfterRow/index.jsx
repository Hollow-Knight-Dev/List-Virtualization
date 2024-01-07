import Card from '../Card'

const MovieAfterRow = ({ index, style, data }) => {
  const movie = data[index]
  return <Card style={style} movie={movie} />
}

export default MovieAfterRow
