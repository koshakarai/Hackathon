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

export default function RegForm() {
  
  const [type, setType] = useState("buyer")
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [surname, setSurname] = useState()
  const [name, setName] = useState()
  const [patronymic, setPatronymic] = useState()
  const [inn, setInn] = useState()
  const [org, setOrg] = useState()

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
    if (password == confirmPassword) {
      e.preventDefault();
      const data = {
          email: email,
          password: password,
          type: type,
          
          surname: surname,
          name: name,
          patronymic: patronymic,
          inn: inn,
          company_name: org,

  }
  const headers = {'Accept': 'application/json',}
  axios.post('http://127.0.0.1:8000/api/v1/create', data, headers)
    .then(res => {if (res.statusText == "OK") {alert("поздравляем вы успешно зарегистрировались")}}).catch(err => console.log(err)) 
  ;} else {alert("пароли не совпадают")}}
  return (
    <div>
      <Button onClick={handleClickOpen}
      sx={{
        paddingLeft: '50%',
        paddingTop: '10%',
        paddingBottom: '10%',
        width: '50%',
        height: '40%',
        fontSize: 35,
        color: '#00B3E7',
    
      }}>
        регистрация
      </Button>
      <Dialog
        type={type}
        open={open}
        onClose={handleClose}
      ></Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Регистрация</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Спасибо что используете росгосзаказы"
          </DialogContentText>
          <FormControl sx={{ mt: 2, minWidth: 140 }}>
              <InputLabel htmlFor="type">Зарегистрироваться как</InputLabel>
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
          <TextField
            autoFocus
            margin="dense"
            label="Потвердите Пароль"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Фамилия"
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Имя"
            onChange={(e) => setName(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          autoFocus
          margin="dense"
          label="Отчество"
          onChange={(e) => setPatronymic(e.target.value)}
          type="text"
          fullWidth
          variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Название организации"
            onChange={(e) => setOrg(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="ИНН"
            onChange={(e) => setInn(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleSubmit}>Зарегистрироваться</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}