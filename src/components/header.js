const Header = ({ change_theme, theme }) => {
  return (
    <div className="header">
      <h2>Online Clock & Timer & Stopwatch</h2>

      <button
        className={theme === 'sad_man' ? 'sad_man' : 'glowing_star'}
        onClick={change_theme}
      >
        theme switch
      </button>
    </div>
  )
}

export default Header
