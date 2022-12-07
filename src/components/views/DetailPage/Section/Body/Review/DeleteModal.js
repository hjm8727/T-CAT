import styled from "styled-components";

const DModal = styled.div`
.delete-confirmation-wrapper {
  position: fixed;
  z-index: 100;
  top: 0; left: 0;
  height: 100vh;  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
}
.delete-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  background: white;
  padding: 20px;
  border-radius: 10px;
}
.title {
  color: blue;
  font-size: 1.2rem;
}
.confirmation-message {
  line-height: 1.5;
  color: blue;
}
.btn-container {
  display: flex;
  justify-content: space-between;
}
button {
  color: grey;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    opacity: 0.65;
  }
}
.cancel-btn {
  background: blue;
  color: white;
  }
.delete-btn{
  background: red;
  color: white;
}
    /* @include media-sm() {
      width: 400px;
      padding: 30px;

      .btn-container {
        button{
          padding: 15px 30px;
        }
      }
    } */
`

const DeleteModal = ({ setDeleting, deleteComment, setDeleteModalState }) => {
  const cancelDelete = () => {
    setDeleting(false);
    setDeleteModalState(false);
  };

  const deleteBtnClick = () => {
    deleteComment();
    setDeleteModalState(false);
  };

  return (
    <DModal>
    <div className="delete-confirmation-wrapper">
      <div className="delete-container">
        <div className="title">댓글 삭제</div>
        <div className="confirmation-message">
          삭제하시겠습니까?
        </div>
        <div className="btn-container">
          <button className="delete-btn" onClick={deleteBtnClick}>
            예, 삭제
          </button>
          <button className="cancel-btn" onClick={cancelDelete}>
            아니요, 취소
          </button>
        </div>
      </div>
    </div>
    </DModal>
  );
};

export default DeleteModal;
