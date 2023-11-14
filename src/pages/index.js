import { useCallback, useState } from 'react'
import Header from '../components/header'
import Theme from '../components/theme'
import '../style/index.scss'
import Clock from '../components/clock'

const Index = () => {
  const [theme, setTheme] = useState('') // glowing_star
  const [types, setType] = useState('clock')

  const change_type = useCallback(
    (target_type) => {
      if (target_type === 'clock') setType(target_type)
      else if (target_type === 'timer') setType(target_type)
      else if (target_type === 'stopwatch') setType(target_type)
    },
    [types]
  )

  const change_theme = useCallback(() => {
    setTheme(theme === 'sad_man' ? 'glowing_star' : 'sad_man')
  }, [theme])

  return (
    <div id={theme === 'sad_man' ? 'sad_man' : 'glowing_star'}>
      <div id="container">
        <Header change_theme={change_theme} theme={theme} />
        <Theme theme={theme} />

        <div
          className={`${
            theme === 'sad_man' ? 'sad_man' : 'glowing_star'
          } contents`}
        >
          <p>Menu</p>
          <hr className={theme === 'sad_man' ? 'sad_man' : 'glowing_star'} />
          <ul className={theme === 'sad_man' ? 'sad_man' : 'glowing_star'}>
            <li
              onClick={() => change_type('clock')}
              className={theme === 'sad_man' ? 'sad_man' : 'glowing_star'}
            >
              clock
            </li>
            <li
              onClick={() => change_type('timer')}
              className={theme === 'sad_man' ? 'sad_man' : 'glowing_star'}
            >
              timer
            </li>
            <li
              onClick={() => change_type('stopwatch')}
              className={theme === 'sad_man' ? 'sad_man' : 'glowing_star'}
            >
              stopwatch
            </li>
          </ul>
          <Clock types={types} />
        </div>
      </div>
    </div>
  )
}

export default Index
