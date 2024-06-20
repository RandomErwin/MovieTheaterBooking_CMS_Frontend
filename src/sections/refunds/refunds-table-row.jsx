import { useState } from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from 'src/components/iconify';

export default function RefundTableRow({
  orderNum,
  userName,
  totalAmount,
  bonus,
  payway,
  payStatus,
  selected,
  handleClick,
  onRowClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleDetail = (event) => {
    onRowClick(orderNum);
  }

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected} onClick={handleDetail}>
        
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2" noWrap>
              {orderNum}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap>
            {userName}
          </Typography> 
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap>
            {totalAmount}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap>
            {bonus}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap>
            {payway}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography variant="subtitle2" noWrap>
            {payStatus}
          </Typography>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

RefundTableRow.propTypes = {
  orderNum: PropTypes.any,
  userName: PropTypes.any,
  totalAmount: PropTypes.any,
  bonus: PropTypes.any,
  payway: PropTypes.any,
  payStatus: PropTypes.any,
  handleClick: PropTypes.func,
  handleDetail: PropTypes.func,
  selected: PropTypes.any,
};
