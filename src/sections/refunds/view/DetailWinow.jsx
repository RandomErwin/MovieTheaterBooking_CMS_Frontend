import React from 'react';
import { Modal, Box, Typography, Button, Grid, Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 680,
  maxHeight: 650,
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color: '#FF5809',
  padding: 6,

  '&::-webkit-scrollbar': {
    width: 7,
  },
  '&::-webkit-scrollbar-button': {
    background: 'transparent',
    borderRadius: 4,
  },
  '&::-webkit-scrollbar-track-piece': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid slategrey',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'transparent',
  },
};

const DetailWindow = ({ show, onHide, data }) => {
  return (
    <Modal
      open={show}
      onClose={onHide}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ fontFamily: 'LXGW WenKai TC', fontWeight: 'bold', color: '#fff' }}>
          退款詳細資訊
        </Typography>
        {data && (
          <Grid container spacing={2} sx={{ mt: 2}}>
            {data.map((refund, key) => (
              <>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>會員姓名: {refund.userName}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>訂單編號: {refund.orderNum}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>交易金額: {refund.totalAmount}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>紅利點數: {refund.bonus}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>電影名稱: {refund.title}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>上映日期: {refund.showtime}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>電影票號: {refund.ticketId}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>票種: {refund.ticketType}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>座位編號: {refund.seatNote}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>售票單價: {refund.uniPrice}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>座位排號: {refund.rowNumber}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>座位列號: {refund.seatNumber}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>退款方式: {refund.payway}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>退款狀態: {refund.payStatus}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>退款時間: {refund.payTime}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Typography variant='body1'>
                    <div>修改時間: {refund.modifyTime}</div>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Divider 
                    variant="large" 
                    sx={{borderColor: '#0080FF'}}/>
                </Grid>
                <Grid item xs={12} sm={6} key={key}>
                  <Divider 
                    variant="large" 
                    sx={{borderColor: '#0080FF'}}/>
                </Grid>
                
              </>
              
            ))}
          </Grid>
        )}
        <Button onClick={onHide}>Close</Button>
      </Box>
    </Modal>
  );
};

export default DetailWindow;
