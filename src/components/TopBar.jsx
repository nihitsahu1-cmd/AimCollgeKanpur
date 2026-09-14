function TopBar({ isDarkMode, onToggleTheme }) {
  return (
    <div className="top-bar">
      <div className="container d-flex justify-content-between align-items-center">
        <span><i className="bi bi-quote me-2" />सही शिक्षा, उज्जवल भविष्य की पहचान!</span>
        <div className="d-flex align-items-center gap-3">
            <a href="tel:9506012020">
                <i className="bi bi-telephone-fill me-1" />
                9506012020</a><a href="mailto:aimcollege@gmail.com">
                    <i className="bi bi-envelope-fill me-1" />Email Us</a>
                    <button
                      className="theme-toggle"
                      type="button"
                      onClick={onToggleTheme}
                      aria-label={`Switch to ${isDarkMode ? "day" : "night"} mode`}
                      title={`Switch to ${isDarkMode ? "day" : "night"} mode`}
                    >
                      <i className={`bi bi-${isDarkMode ? "sun" : "moon-stars"}`} />
                      <span>{isDarkMode ? "Day mode" : "Night mode"}</span>
                    </button>
                    </div>
      </div>
    </div>
  );
}

export default TopBar;