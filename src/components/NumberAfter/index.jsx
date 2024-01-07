import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'

const Row = ({ index, style, data }) => <div style={style}>{data[index]}</div>

const NumberAfter = ({ list }) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List height={height} itemCount={list.length} itemSize={24} width={width} itemData={list}>
          {Row}
        </List>
      )}
    </AutoSizer>
  )
}

export default NumberAfter

// Another method without sending data
/* const NumberRow = ({ index, style }) => <div style={style}>Row {index + 1}</div>

const Number2 = ({}) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List height={height} itemCount={200000} itemSize={24} width={width}>
          {NumberRow}
        </List>
      )}
    </AutoSizer>
  )
} */
