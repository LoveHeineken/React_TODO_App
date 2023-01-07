import { Routes, Route } from "react-router-dom"
import { TaskList } from "./components/TaskList"
import { TaskProvider } from "./contexts/TaskContext"
import { Task } from "./components/Task"

function App() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route
            path="/tasks/:id"
            element={
              <TaskProvider>
                <Task />
              </TaskProvider>
            }
          />
        </Routes>
      </div>
    )
  }
  
  export default App