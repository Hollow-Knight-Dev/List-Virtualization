import { Button, Spinner, Switch } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import MovieAfter from './components/MovieAfter'
import MovieBefore from './components/MovieBefore'
import NumberAfter from './components/NumberAfter'
import NumberBefore from './components/NumberBefore'
import { fetchApis } from './utils/fetchApis'

function App() {
  const [data, setData] = useState([])
  const [loadList, setLoadList] = useState([])
  const [isMovieList, setIsMovieList] = useState(true)
  const [isUseReactWindow, setIsUseReactWindow] = useState(false)
  const [numberListSize, setNumberListSize] = useState(1000)

  const handleSwitchDataSource = () => {
    setIsMovieList((prev) => !prev)
    setIsUseReactWindow(false)
    setLoadList([])
  }

  const handleSwitchMode = () => {
    setIsUseReactWindow((prev) => !prev)
    setLoadList([])
  }

  const handleNumberListSize = (e) => {
    let number = e.target.value
    if (number >= 0) {
      setNumberListSize(number)
    } else {
      setNumberListSize(1000)
    }
    setLoadList([])
  }

  const handleNumberListSizeIncrease = () => {
    const newNumber = parseInt(numberListSize) + 10000
    setNumberListSize(newNumber)
    setLoadList([])
  }

  const handleLoadList = () => {
    if (isMovieList) {
      setLoadList(data)
    } else {
      const newArray = [...Array(parseInt(numberListSize))].map((_, index) => `Row ${index + 1}`)
      setLoadList(newArray)
    }
  }

  useEffect(() => {
    fetchApis().then((result) => {
      setData(result)
    })
  }, [])

  useEffect(() => {
    console.log('Load List', loadList)
  }, [loadList])

  return (
    <div className='flex h-screen w-screen flex-col items-center'>
      <div className='m-2 flex flex-col items-center gap-2'>
        <Switch isSelected={isMovieList} onValueChange={handleSwitchDataSource}>
          {isMovieList ? (
            <p className='text-2xl font-bold'>Movie List</p>
          ) : (
            <p className='text-2xl font-bold'>Number List</p>
          )}
        </Switch>

        {!isMovieList && (
          <div className='flex items-center gap-2'>
            <p>Number List Size: </p>
            <input
              className='w-20 border'
              type='number'
              value={numberListSize}
              onChange={(e) => handleNumberListSize(e)}
              readOnly={false}
              disabled={false}
            />
            <Button className='h-8 w-20' onClick={() => handleNumberListSizeIncrease()}>
              + 10000
            </Button>
          </div>
        )}

        <Switch isSelected={isUseReactWindow} onValueChange={handleSwitchMode}>
          {isUseReactWindow ? 'After using react-window' : 'Before using react-window'}
        </Switch>

        {loadList.length === 0 && data.length === 0 ? (
          <div className='flex gap-2'>
            <p>Data preparing</p>
            <Spinner />
          </div>
        ) : (
          <Button className='h-8 w-20' onClick={() => handleLoadList()}>
            Load List
          </Button>
        )}
      </div>

      <div className='flex h-4/5 w-3/5 overflow-hidden border border-blue-300 p-2'>
        {isMovieList ? (
          loadList.length > 0 && isUseReactWindow ? (
            <MovieAfter movies={loadList} />
          ) : (
            <MovieBefore movies={loadList} />
          )
        ) : loadList.length > 0 && isUseReactWindow ? (
          <NumberAfter list={loadList} />
        ) : (
          <NumberBefore list={loadList} />
        )}
      </div>
    </div>
  )
}

export default App
