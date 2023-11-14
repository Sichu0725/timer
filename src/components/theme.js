import GlowingStar from '../animations/glowingStar'
import SadMan from '../animations/sadman'

const Theme = ({ theme }) => {
  if (theme === 'sad_man') {
    return <SadMan />
  } else {
    return <GlowingStar />
  }
}

export default Theme
