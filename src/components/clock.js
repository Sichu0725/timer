import Simple_clock from './simpleClock'
import SimpleStopwatch from './simpleStopwatch'
import SimepleTimer from './simpleTimer'

const Clock = ({ types }) => {
  if (types == 'clock') return <Simple_clock />
  else if (types == 'timer') return <SimepleTimer />
  else if (types == 'stopwatch') return <SimpleStopwatch />
}

export default Clock
