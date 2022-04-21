import { useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { DialogContentText, FormControlLabel, Switch } from '@mui/material';

export default function AddOrder() {
    
    const {id} = useParams()
    const [title, setTitle] = useState()
    const [amount, setAmount] = useState()
    const [exp_data, setExp_data] = useState()
    const [req_price, setReq_price] = useState()
    const [red_line, setRed_line] = useState(false)

    const [currency, setCurrency] = useState()


  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        user_id: id,
        title: title,
        amount: amount,
        exp_data: exp_data,
        req_price: req_price,  
        currency: currency, 
        red_line: red_line, 
    }
    const headers = {'Accept': 'application/json',}
      axios.post('http://127.0.0.1:8000/api/v1/add_order', data, headers)
      .then(res => {if (res.statusText=="OK") {console.log("OK"); console.log(res.data);window.location.reload()}}).catch(err => console.log(err));}


  return (
    <div>
      <Button onClick={handleClickOpen}
      sx={{
        width: 45,
        height: 45,
        fontSize: 35,
        color: '#00e3b7',
    
      }}>+</Button>
      <Dialog
        open={open}
        onClose={handleClose}
      ></Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Новый заказ</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Заказ (Сырье Продукт Услуга)"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Количество или объем работ"
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
          autoFocus
          margin="dense"
          label="запрос действителен до"
          onChange={(e) => setExp_data(e.target.value)}
          type="text"
          fullWidth
          variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            label="Оплата"
            onChange={(e) => setReq_price(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Валюта"
            onChange={(e) => setCurrency(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />

          <DialogContentText>
            срочный заказ
          </DialogContentText>
          <Switch onChange={(e) => setRed_line(!red_line)} />

        

             
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleSubmit}>Добавить заказ</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}