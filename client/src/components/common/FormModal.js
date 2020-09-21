import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { userApi } from '../../api';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '30%',
  },
  innerModal: {
    marginBottom: '1rem',
  },
  titleModal: {
    textAlign: 'center',
  },
  wrapperForm: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-around',
  },
}));

const FormModal = ({
  title,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState({email: '', password: ''});

  const changeHandler = event => {
    setInputValue({...inputValue, [event.target.name]: event.target.value});
  };

  const sendValue = () => {
    console.log(inputValue);
    //test kind, later i will use saga
    title === 'register'
       ?  userApi.register(inputValue)
       : userApi.login(inputValue);
    handleClose();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        {title}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 className={classes.titleModal}>
              {title === 'register' ? 'Register' : 'Login'}
            </h3>
            <form noValidate autoComplete="off" className={classes.wrapperForm}>
              <TextField
                id="standard-email-input"
                label="email"
                type="text"
                name="email"
                value={inputValue.email}
                onChange={changeHandler}
                className={classes.innerModal}
              />
              <TextField
                id="standard-password-input"
                label="password"
                type="password"
                name="password"
                value={inputValue.password}
                onChange={changeHandler}
                className={classes.innerModal}
              />
              <Button variant="contained" onClick={sendValue}>
                {title === 'register' ? 'register' : 'login'}
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default FormModal;
