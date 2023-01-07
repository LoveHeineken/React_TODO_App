import { useAsync } from "../hooks/useAsync"
import { getTasks } from "../services/tasks"
import { useState } from "react"
import { Link } from "react-router-dom"

export function TaskList() {
  const { loading, error, value: tasks } = useAsync(getTasks)
  const [message, setMessage] = useState()

  if (loading) return <h1>Loading</h1>
  if (error) return <h1 className="error-msg">{error}</h1>

  return tasks.map(task => {
    return (
      <h1 key={task.id}>
        {/* <input type="task" id={task.id} onChange={(e) => setMessage(e.target.value)} value={task.content}></input> */}
        <Link to={`/posts/${task.id}`}>{task.content}</Link>
        {/* <button type="submit" onClick={cliskInsert}>追加</button>
        <button type="submit" onClick={clickDelete}>削除</button> */}
      </h1>
    )
  })
}
