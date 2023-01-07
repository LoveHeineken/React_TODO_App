// import { usePost } from "../contexts/PostContext"
import { useAsyncFn } from "../hooks/useAsync"
import { createComment } from "../services/comments"
// import { CommentForm } from "./CommentForm"
// import { CommentList } from "./CommentList"
import { React } from "react"

export function Insert() {
//   const { post, rootComments, createLocalComment } = useInsert()
  const Context = React.createContext()
  const { loading, error, execute: insertTaskFn } = useAsyncFn(createComment)

  function insertTask(content) {
    return insertTaskFn({ content: content }).then("inserted")
  }

  return (
    <React.Fragment>
      {/* <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className="comments-title">Comments</h3> */}
      {/* <section> */}
      <form
        loading={loading}
        error={error}
        //   onSubmit={onCommentCreate}
        onSubmit={insertTask}
      />
      {/* {rootComments != null && rootComments.length > 0 && (
          <div className="mt-4">
            <CommentList comments={rootComments} />
          </div>
        )} */}
      {/* </section> */}
    </React.Fragment>
  )
}
