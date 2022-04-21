import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



export default function FormDialog() {
  
  const [type, setType] = useState("buyer")
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  const auth=(id, who)=>{
    localStorage.setItem('auth', id);
    navigate('/' + who + '/' + id);
      }
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setType(
      event.target.value,
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
          email: email,
          password: password,
          type: type,
   
  } 
  const headers = {'Accept': 'application/json',}
  axios.post('http://127.0.0.1:8000/api/v1/auth', data, headers)
  .then(res => {if (res.statusText=="OK") {auth(res.data.id, type)}}).catch(err => console.log(err));}
  return (
    <div>
    
      <Button color="secondary" sx={{
    width: 300,
    height: 70,
    fontSize: 35,
    color: '#00B3E7',

  }}   onClick={handleClickOpen}>
        Вход
      </Button>
      <Dialog
        type={type}
        open={open}
        onClose={handleClose}
      ></Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Авторизация</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Спасибо что используете росгосзаказы
          </DialogContentText>
          <FormControl sx={{ mt: 2, minWidth: 140 }}>
              <InputLabel htmlFor="type">Войти как</InputLabel>
              <Select
                autoFocus
                value={type}
                onChange={handleChange}
                label="type"
            >
                <MenuItem value={"buyer"}>Заказчик</MenuItem>
                <MenuItem value={"seller"}>Поставшик</MenuItem>
              </Select>
            </FormControl>
          <TextField
            autoFocus
            margin="dense"
            label="Почта"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Пароль"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleSubmit}>Войти</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}