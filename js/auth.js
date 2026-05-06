const USERNAME = 'username'

export function saveUsername(username) {
  localStorage.setItem(USERNAME, username)
}

export function removeUsername() {
  localStorage.removeItem(USERNAME)
}

export function loadUsername() {
  return localStorage.getItem(USERNAME)
}
