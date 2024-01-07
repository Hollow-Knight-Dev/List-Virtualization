import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import MovieAfterRow from '../MovieAfterRow'

const MovieAfter = ({ movies }) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={movies.length}
          itemSize={56}
          width={width}
          itemData={movies}
        >
          {MovieAfterRow}
        </List>
      )}
    </AutoSizer>
  )
}

export default MovieAfter
