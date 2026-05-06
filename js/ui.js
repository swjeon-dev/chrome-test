const todoLogoutEl = document.querySelector('.logout')
const todoLoginForm = document.querySelector('.todo-login-form')
const todoForm = document.querySelector('.todo-form')
const todoList = document.querySelector('.todo-list')

export function showTodoUI() {
  todoLogoutEl.style.display = 'block'
  todoLoginForm.style.display = 'none'
  todoForm.style.display = 'flex'
  todoList.style.display = 'flex'
}

export function showLoginUI() {
  todoLogoutEl.style.display = 'none'
  todoLoginForm.style.display = 'flex'
  todoForm.style.display = 'none'
  todoList.style.display = 'none'
}
