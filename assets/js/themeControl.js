const THEME_AUTO = 'auto'
const THEME_DARK = 'dark'
const THEME_LIGHT = 'light'
const STORED_THEME = 'savedTheme'

window.addEventListener('load', () => {
  const darkThemePreference = window.matchMedia('(prefers-color-scheme: dark)')
  const html = document.querySelector('html')
  const themeControl = document.querySelector('#theme-control')
  const themeIconClock = document.querySelector('#theme-icon>.clock')
  const themeIconSun = document.querySelector('#theme-icon>.sun')
  const themeIconMoon = document.querySelector('#theme-icon>.moon')

  /* Utility functions */
  const saveTheme = function(theme) {
    localStorage.setItem(STORED_THEME, theme)
  }
  const setAutoTheme = function(theme) {
    if (theme === THEME_DARK) {
      html.dataset.theme = THEME_DARK
    } else {
      html.dataset.theme = THEME_LIGHT
    }
    saveTheme(THEME_AUTO)
    setThemeChangerAuto()
  }
  const setThemeChangerAuto = function() {
    themeControl.value = THEME_AUTO
    themeIconClock.classList.toggle('hide', false)
    themeIconSun.classList.toggle('hide', true)
    themeIconMoon.classList.toggle('hide', true)
  }
  const setDarkTheme = function() {
    html.dataset.theme = THEME_DARK
    saveTheme(THEME_DARK)
    setThemeChangerDark()
  }
  const setThemeChangerDark = function() {
    themeControl.value = THEME_DARK
    themeIconClock.classList.toggle('hide', true)
    themeIconSun.classList.toggle('hide', true)
    themeIconMoon.classList.toggle('hide', false)
  }
  const setLightTheme = function() {
    html.dataset.theme = THEME_LIGHT
    saveTheme(THEME_LIGHT)
    setThemeChangerLight()
  }
  const setThemeChangerLight = function() {
    themeControl.value = THEME_LIGHT
    themeIconClock.classList.toggle('hide', true)
    themeIconSun.classList.toggle('hide', false)
    themeIconMoon.classList.toggle('hide', true)
  }
  const preferenceChangeHandler = function(ev) {
    if (ev.matches) {
      setAutoTheme(THEME_DARK)
    } else {
      setAutoTheme(THEME_LIGHT)
    }
  }

  /* Initialize themeControl */
  let theme = localStorage.getItem(STORED_THEME)
  if (theme === null || theme === THEME_AUTO) {
    /* If no theme was chosen or auto was chosen */
    /* Watch color scheme preference changes */
    darkThemePreference.addEventListener('change', preferenceChangeHandler)
    setThemeChangerAuto()
  } else {
    if (theme === THEME_DARK) {
      setThemeChangerDark()
    } else {
      setThemeChangerLight()
    }
  }

  /* Watch theme changer */
  themeControl.addEventListener('click', () => {
    const _self = themeControl
    /* Theme order: auto -> light -> dark */
    if (_self.value === THEME_DARK) {
      /* Get system preference then set to auto */
      if (darkThemePreference.matches) {
        setAutoTheme(THEME_DARK)
      } else {
        setAutoTheme(THEME_LIGHT)
      }
      /* Watch color scheme preference changes */
      darkThemePreference.addEventListener('change', preferenceChangeHandler)
    } else if (_self.value === THEME_AUTO) {
      /* Remove listener then set to light */
      darkThemePreference.removeEventListener('change', preferenceChangeHandler)
      setLightTheme()
    } else {
      /* set to dark */
      setDarkTheme()
    }
  })
})
