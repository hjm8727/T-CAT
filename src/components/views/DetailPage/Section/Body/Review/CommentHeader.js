const CommentHeader = ({commentData, time}) => {
  return (
    <div className="comment--header">
      <div className="username">{commentData.username}</div>
      {commentData.currentUser ? <div className="you-tag">You</div> : ""}
      <div className="comment-posted-time">{`${time} ago`}</div>
    </div>
  );
};

export default CommentHeader;
