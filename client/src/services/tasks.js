import { makeRequest } from "./makeRequest"

export function getTasks() {
  return makeRequest("/tasks")
}

export function getTask(id) {
  return makeRequest(`/tasks/${id}`)
}
