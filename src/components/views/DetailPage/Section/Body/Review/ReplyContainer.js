import Reply from "./Reply";

const ReplyContainer = ({
  commentData,
  commentPostedTime,
  addReply,
  editComment,
  deleteComment,
  setDeleteModalState,
}) => {
  return (
    <div className="reply-container">
      {commentData.map((data) => (
        <Reply
          key={data.id}
          commentData={data}
          commentPostedTime={commentPostedTime}
          addNewReply={addReply}
          editComment={editComment}
          deleteComment={deleteComment}
          setDeleteModalState={setDeleteModalState}
        />
      ))}
    </div>
  );
};

export default ReplyContainer;
