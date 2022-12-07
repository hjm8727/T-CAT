import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Rate } from 'antd';

export default function WriteReview() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  function handleChange(value) {
      setValue(value);
  }

  return (
    <div >
      <Button variant="outlined" onClick={handleClickOpen}>
        관람후기 등록
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth>
        <DialogTitle>작품명</DialogTitle>
        <DialogContent>
        <Rate allowHalf value={value} onChange={handleChange} style={{ fontSize: '1.8rem'}}/>
        <hr/>

          <TextField
          fullWidth
          id="standard-multiline-static"
          label="관람후기"
          multiline
          rows={4}
          variant="standard"
        />
        <DialogContentText>
          <br/>
          <strong>관람후기 작성 시 유의사항</strong>
          <br/>
          <br/>
          TCat 게시판 운영 규정에 위반된다고 판단되는 글은 사전고지 없이 삭제될 수 있습니다.<br/>

          티켓 매매 및 양도, 교환의 글<br/>
          전화번호, 이메일, 주소 등 회원 및 타인의 개인정보 유출이 우려되는 경우<br/>
          욕설, 비방, 도배성 글을 작성한 경우<br/>
          명예훼손, 저작권, 초상권의 권리 침해 및 음란한 사진을 게재한 경우<br/>
          작성된 게시물의 저작권은 작성자에게 있으며, 게시물로 인해 발생하는 문제는 작성자 본인에게 책임이 있습니다.<br/>
          작성 시 유의해주시기 바랍니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>등록</Button>
          <Button onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


