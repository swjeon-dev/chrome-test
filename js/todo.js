import { loadUsername, removeUsername, saveUsername } from './auth.js'
import { showTodoUI, showLoginUI } from './ui.js'

const todoLogoutEl = document.querySelector('.logout')
const todoLoginForm = document.querySelector('.todo-login-form')
const todoForm = document.querySelector('.todo-form')
const todoLoginInput = document.querySelector('.todo-login-input')

todoLoginForm.addEventListener('submit', e => {
  e.preventDefault()

  const username = todoLoginInput.value.trim()

  saveUsername(username)

  showTodoUI()
  loadTodoList()
})

todoLogoutEl.addEventListener('click', () => {
  removeUsername()
  showLoginUI()
  const todoListEl = document.querySelector('.todo-list')
  todoListEl.innerHTML = ''
})

function saveTodoList(todo) {
  const username = loadUsername()

  const prevTodoList = JSON.parse(localStorage.getItem(username)) || []
  const newTodoList = [...prevTodoList, todo]

  localStorage.setItem(username, JSON.stringify(newTodoList))
}

function loadTodoList() {
  const username = loadUsername()
  const todoList = JSON.parse(localStorage.getItem(username)) || []
  const todoListEl = document.querySelector('.todo-list')

  todoListEl.innerHTML = ''

  todoList.forEach((todo, index) => {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const removeButton = document.createElement('button')
    const completeButton = document.createElement('button')

    span.textContent = todo
    span.classList.add('todo-text')
    removeButton.className = 'todo-remove-button'
    completeButton.className = 'todo-complete-button'

    removeButton.addEventListener('click', () => {
      const newTodoList = todoList.filter((item, idx) => idx !== index)

      localStorage.setItem(username, JSON.stringify(newTodoList))
      loadTodoList()
    })

    completeButton.addEventListener('click', () => {
      span.classList.toggle('completed')
    })

    removeButton.textContent = '삭제'
    completeButton.textContent = '완료'

    li.appendChild(span)
    li.appendChild(completeButton)
    li.appendChild(removeButton)

    todoListEl.appendChild(li)
  })

  if (todoList.length === 0) {
    todoListEl.style.display = 'none'
  } else {
    todoListEl.style.display = 'block'
  }
}

todoForm.addEventListener('submit', e => {
  e.preventDefault()

  const todoInput = document.querySelector('.todo-input')
  const todo = todoInput.value.trim()
  todoInput.value = ''

  saveTodoList(todo)
  loadTodoList()
})

const savedUser = loadUsername()
if (savedUser) {
  showTodoUI()
  loadTodoList()
} else {
  showLoginUI()
}
