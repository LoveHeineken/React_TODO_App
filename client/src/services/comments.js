import { makeRequest } from "./makeRequest"

export function createTask({ content }) {
  return makeRequest(`tasks/${content}`, {
    method: "POST",
    data: { content },
  })
}

export function updateTask({ id, content }) {
  return makeRequest(`tasks/${id}`, {
    method: "PUT",
    data: { content },
  })
}

export function deleteTask({ id }) {
  return makeRequest(`tasks/${id}`, {
    method: "DELETE",
  })
}

