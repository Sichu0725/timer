import { useRef, useState } from 'react'

const SimpleStopwatch = () => {
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)
  const [laps, setLaps] = useState([])
  const intervalRef = useRef(undefined)

  const startStopwatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
      setRunning(true)
    } else {
      clearInterval(intervalRef.current)
      setRunning(false)
    }
  }

  const resetStopwatch = () => {
    clearInterval(intervalRef.current)
    setTime(0)
    setLaps([])
    setRunning(false)
  }

  const format_time = (time) => {
    if (time < 61) {
      return `${0}분 ${time}초`
    }

    const hour = Math.floor(time / 3600)
    const min = Math.floor(time - (hour * 3600) / 60) / 1000
    const sec = time - hour * 3600 - min * 60

    return `${hour}분 ${min}`
  }

  return (
    <div>
      <p>{format_time(time)}</p>
      <ul>
        <li onClick={startStopwatch}>start</li>
        <li onClick={resetStopwatch}>reset</li>
      </ul>
    </div>
  )
}

export default SimpleStopwatch
