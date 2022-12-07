import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import { useState } from 'react';

const ACWrap = styled.div`
width: 100%;
.add-comment {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  animation: come-in 0.7s ease-in-out;

  .comment-input {
    position: relative;
    height: 100px;
    border: 2px solid lightgray;
    color: $dark-blue;
    border-radius: 10px;
    padding: 15px 25px;
    resize: none;
    scrollbar-width: none;
    &::placeholder {
      color: darkblue;
    }
    &::-webkit-scrollbar {
      width: 0;
    }
    &:focus {
      outline: 1.5px solid blue;
    }
  }

  .send-btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add-btn {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 15px 30px;
    background: blue;
    border: 0;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
    &:hover,
    &:focus{
      opacity: 0.65;
    }
  }

  @include media-md() {
    width: 735px;
    flex-direction: row;
    padding: 25px;
    gap: 25px;
    .comment-input {
      width: 100%;
    }
    .send-btn-container {
      align-items: flex-start;
    }
  }
}

@keyframes come-in {
  0%{
    opacity: 0;
    transform: translateY(-100%);
  }
  75%{
    opacity: 0;
    transform: translateY(-50%);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
`

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ASD({ buttonValue, addComments, replyingTo }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
const [comment, setComment] = useState("");

const clickHandler = () => {
  if (comment === "" || comment === " ") return;

  const newComment = {
    id: Math.floor(Math.random() * 100) + 5,
    content: replyingToUser + comment,
    createdAt: new Date(),
    username: "하정목",
    currentUser: true,
    replies: [],
  };

  addComments(newComment);
  setComment("");
  setOpen(false);
};

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      관람후기 등록
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        작품명
        </BootstrapDialogTitle>
        <ACWrap>
    <div className="add-comment">
      <textarea
        className="comment-input"
        placeholder="댓글을 작성해 보세요."
        value={replyingToUser + comment}
        onChange={(e) => {
          setComment(
            e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
          );
        }}
      />
      <div className="send-btn-container">
        <button className="add-btn" onClick={clickHandler}>
          {buttonValue}
        </button>
      </div>
    </div>
    </ACWrap>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}