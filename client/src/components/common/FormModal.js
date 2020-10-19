import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { googleRegister, setAuth, userRegister } from '../../redux/actions/user';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
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
  buttonFacebook: {
    marginBottom: '20px',
  }
}));

const FormModal = ({
  title,
  ...props
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState({email: '', password: ''});

  const dispatch = useDispatch();

  const changeHandler = event => {
    setInputValue({...inputValue, [event.target.name]: event.target.value});
  };

  const sendValue = () => {
    title === 'register'
       ?  dispatch(userRegister(inputValue, props.history))
       :  dispatch(setAuth(inputValue, props.history));
    handleClose();
  }

  const setGoogle = () => {
    googleRegister();
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
              <p className={classes.titleModal}>or</p>
              <Button
                variant="contained"
                className={classes.buttonFacebook}
                color="primary">
                  Sign in from facebook
              </Button>
              <Button
               variant="contained"
               color="secondary"
               onClick={setGoogle}>
               <a href="http://localhost:3000/api/auth/google/callback"> Sign in from Google </a>
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withRouter(FormModal);
