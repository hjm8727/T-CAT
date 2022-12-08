import styled from "styled-components";

const DModal = styled.div`
.delete-confirmation-wrapper {
  position: fixed;
  z-index: 100;
  /* top: 0; left: 0; */
  height: 100vh;  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* display: none; */
  /* position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6); */
}
.delete-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  background: white;
  padding: 20px;
  border-radius: 10px;

  /* width: 90%;
  max-width: 4500px;
  width: 700px;
  height: 740px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
}
.title {
  /* color: blue;
  font-size: 1.2rem; */

  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
}
.confirmation-message {
  /* line-height: 1.5;
  color: blue; */

  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
}
.btn-container {
  /* display: flex;
  justify-content: space-between; */

  padding: 12px 16px;
  text-align: right;
}
button {
  /* color: grey;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    opacity: 0.65;
  } */

  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
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
