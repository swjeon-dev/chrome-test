import { loadUsername } from './auth.js'
import { showTodoUI, showLoginUI } from './ui.js'

import './todo.js'
import './weather.js'
import './clock.js'
import './auth.js'

export function init() {
  const username = loadUsername()

  if (username) {
    showTodoUI()
  } else {
    showLoginUI()
  }
}

init()
