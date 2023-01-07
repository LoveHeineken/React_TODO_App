import { IconBtn } from "./IconBtn"
import { FaEdit, FaHeart, FaRegHeart, FaReply, FaTrash } from "react-icons/fa"
import { useTask } from "../contexts/TaskContext"
// import { CommentList } from "./CommentList"
// import { useState } from "react"
import { useAsyncFn } from "../hooks/useAsync"
import { createTask, deleteTask, updateTask } from "../services/comments"
import { CommentForm } from "./CommentForm"
// import { useUser } from "../hooks/useUser"
import { React } from "react"

// const dateFormatter = new Intl.DateTimeFormat(undefined, {
//   dateStyle: "medium",
//   timeStyle: "short",
// })

export function Comment({
  id,
  message,
  // user,
  // createdAt,
  // likeCount,
  // likedByMe,
}) {
  // const [areChildrenHidden, setAreChildrenHidden] = useState(false)
  // const [isReplying, setIsReplying] = useState(false)
  // const [isEditing, setIsEditing] = useState(false)
  const {
    task,
    // getReplies,
    createLocalComment,
    updateLocalComment,
    deleteLocalComment,
    // toggleLocalCommentLike,
  } = useTask()
  const createCommentFn = useAsyncFn(createTask)
  const updateCommentFn = useAsyncFn(updateTask)
  const deleteCommentFn = useAsyncFn(deleteTask)
  // const currentUser = useUser()

  // function onCommentReply(message) {
  //   return createCommentFn
  //     .execute({ id: task.id, content: task.content })
  //     .then((comment) => {
  //       // setIsReplying(false)
  //       createLocalComment(comment)
  //     })
  // }

  // function onCommentReply(message) {
  //   return createCommentFn
  //     .execute({ postId: post.id, message, parentId: id })
  //     .then((comment) => {
  //       setIsReplying(false)
  //       createLocalComment(comment)
  //     })
  // }

  function onCommentCreate(message) {
    return createCommentFn
      .execute({ id: task.id, message, content: task.content })
      .then((comment) => {
        // setIsEditing(false)
        createLocalComment(id, comment.message)
      })
  }

  function onCommentUpdate(message) {
    return updateCommentFn
      .execute({ id: task.id, message, content: task.content })
      .then((comment) => {
        // setIsEditing(false)
        updateLocalComment(id, comment.message)
      })
  }

  function onCommentDelete() {
    return deleteCommentFn
      .execute({ id: task.id })
      .then((comment) => deleteLocalComment(comment.id))
  }

  // function onToggleCommentLike() {
  //   return toggleCommentLikeFn
  //     .execute({ id, postId: post.id })
  //     .then(({ addLike }) => toggleLocalCommentLike(id, addLike))
  // }

  return (
    <React.Fragment>
      <CommentForm
        autoFocus
        initialValue={message}
        onSubmit={onCommentCreate}
        loading={createCommentFn.loading}
        error={createCommentFn.error}
      />
      <CommentForm
        autoFocus
        initialValue={message}
        onSubmit={onCommentUpdate}
        loading={updateCommentFn.loading}
        error={updateCommentFn.error}
      />
      <CommentForm
        autoFocus
        initialValue={message}
        onSubmit={onCommentDelete}
        loading={deleteCommentFn.loading}
        error={deleteCommentFn.error}
      />
      {/* <div className="comment">
        <div className="header">
          <span className="name">{user.name}</span>
          <span className="date">
            {dateFormatter.format(Date.parse(createdAt))}
          </span>
        </div>
        <CommentForm
          autoFocus
          initialValue={message}
          onSubmit={onCommentUpdate}
          loading={updateCommentFn.loading}
          error={updateCommentFn.error}
        />
        <div className="footer">
          <IconBtn
            onClick={onToggleCommentLike}
            disabled={toggleCommentLikeFn.loading}
            Icon={likedByMe ? FaHeart : FaRegHeart}
            aria-label={likedByMe ? "Unlike" : "Like"}
          >
            {likeCount}
          </IconBtn>
          <IconBtn
            onClick={() => setIsReplying((prev) => !prev)}
            isActive={isReplying}
            Icon={FaReply}
            aria-label={isReplying ? "Cancel Reply" : "Reply"}
          />
          {user.id === currentUser.id && (
            <>
              <IconBtn
                onClick={() => setIsEditing((prev) => !prev)}
                isActive={isEditing}
                Icon={FaEdit}
                aria-label={isEditing ? "Cancel Edit" : "Edit"}
              />
              <IconBtn
                disabled={deleteCommentFn.loading}
                onClick={onCommentDelete}
                Icon={FaTrash}
                aria-label="Delete"
                color="danger"
              />
            </>
          )}
        </div>
        {deleteCommentFn.error && (
          <div className="error-msg mt-1">{deleteCommentFn.error}</div>
        )}
      </div>
      {isReplying && (
        <div className="mt-1 ml-3">
          <CommentForm
            autoFocus
            onSubmit={onCommentReply}
            loading={createCommentFn.loading}
            error={createCommentFn.error}
          />
        </div>
      )}
      {childComments?.length > 0 && (
        <>
          <div
            className={`nested-comments-stack ${
              areChildrenHidden ? "hide" : ""
            }`}
          >
            <button
              className="collapse-line"
              aria-label="Hide Replies"
              onClick={() => setAreChildrenHidden(true)}
            />
            <div className="nested-comments">
              <CommentList comments={childComments} />
            </div>
          </div>
          <button
            className={`btn mt-1 ${!areChildrenHidden ? "hide" : ""}`}
            onClick={() => setAreChildrenHidden(false)}
          >
            Show Replies
          </button>
        </>
      )} */}
    </React.Fragment>
  )
}
