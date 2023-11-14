import moment from 'moment'
import 'moment/locale/ko'
import { useEffect, useState } from 'react'

const Simple_clock = () => {
  const [time, setTime] = useState(moment().format('LLLL')) //useState 훅을 통해 time 값 디폴트 설정
  let timer = null
  useEffect(() => {
    timer = setInterval(() => {
      //timer 라는 변수에 인터벌 종료를 위해 저장
      setTime(moment().format('LLLL')) // 현재 시간 세팅
    }, 1000) //1000ms = 1s 간 반복
    return () => {
      clearInterval(timer) // 함수 언마운트시 clearInterval
    }
  }, [])

  return (
    <div>
      <p>{time}</p>
    </div>
  )
}

export default Simple_clock
