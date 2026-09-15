function ThemeToggle({ isDarkMode, onToggle }) {
  const nextMode = isDarkMode ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextMode} mode`}
      title={`Switch to ${nextMode} mode`}
    >
      <i className={`bi bi-${isDarkMode ? "sun" : "moon-stars"}`} aria-hidden="true" />
      <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}

export default ThemeToggle;
