const NumberBefore = ({ list }) => {
  if (list.length === 0) {
    return null
  }

  return (
    <div className='flex w-full flex-col overflow-y-scroll'>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default NumberBefore
