import { useTask } from "../contexts/TaskContext"
import { useAsyncFn } from "../hooks/useAsync"
import { createTask } from "../services/comments"
import { CommentForm } from "./CommentForm"
import { CommentList } from "./CommentList"

export function Task() {
  const { task, rootComments, createLocalComment } = useTask()
  const { loading, error, execute: createCommentFn } = useAsyncFn(createTask)

  function onCommentCreate(message) {
    return createCommentFn({ postId: task.id, message }).then(
      createLocalComment
    )
  }

  return (
    <>
      <h1>{task.title}</h1>
      <article>{task.body}</article>
      <h3 className="comments-title">Comments</h3>
      <section>
        <CommentForm
          loading={loading}
          error={error}
          onSubmit={onCommentCreate}
        />
        {rootComments != null && rootComments.length > 0 && (
          <div className="mt-4">
            <CommentList comments={rootComments} />
          </div>
        )}
      </section>
    </>
  )
}
