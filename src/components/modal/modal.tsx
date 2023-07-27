import React from 'react';
import Modal from 'react-modal';
import { ModalProps } from '../../@types/types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select } from '@mui/material';

interface ModalInclusaoProps extends ModalProps {}  

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo preto mais claro
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f1f1f1', // Fundo preto mais claro
    border: 'none', // Remover a borda padrão
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Adicionar sombra
    padding: '30px',
    height: '47 rem',
    width: '40rem'
  },
};

Modal.setAppElement('#root');

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textField: {
    flex: 1,
    marginRight: theme.spacing(2),
    marginTop: '20px'
  },
}));

const ModalInclusao = ({ isOpen, onClose }: ModalInclusaoProps) => {
  const classes = useStyles();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Inclusão de Conveniados"
    >
      <h1 className='text-3xl text-blue-400 font-medium'>Inclusão de Conveniados</h1>
      <div className={classes.inputContainer}>
      <p className='text-black mt-8'>Convêniado:</p>
        <TextField
          //label="Conveniado"
          variant="standard"
          className={classes.textField}
          required
        />
        <p className='text-black mt-5'>Convênio:</p>
        <TextField
          //label="Convênio"
          variant="standard"
          className={classes.textField}
          required
        />
      </div>
      <p className='text-black mt-5'>Grupo do Convênio:</p>
      <div className={classes.inputContainer}>
        <TextField
          //label="Grupo do Convênio"
          variant="standard"
          className={classes.textField}
          required
        />
        <p className='text-black mt-5'>Status do Convêniado:</p>
        <Select
          variant='standard'
          //value={age}
          label="Status do Conveniado"
          className={classes.textField} 
          //onChange={handleChange}
        >
          <MenuItem value="ATIVO">ATIVO</MenuItem>
          <MenuItem value="INATIVO">INATIVO</MenuItem>
        </Select>
      </div>
      <div className={classes.inputContainer}>
      <p className='text-black mt-5'>Matrícula:</p>
        <TextField
          //label="Matrícula"
          variant="standard"
          className={classes.textField}
          required
        />
        <p className='text-black mt-5'>Valor Limite:</p>
        <TextField
          //label="Valor Limite"
          variant="standard"
          className={classes.textField}
          required
        />
      </div>
      <div className='mt-6 flex items-center justify-center'>
        <button className="w-32 mr-3 rounded-md h-11 outline-none border-none font-medium bg-red-400 hover:bg-red-500" onClick={onClose}>Cancelar</button>
        <button className="w-32 ml-3 rounded-md h-11 outline-none border-none font-medium bg-green-400 hover:bg-green-500">Criar</button>
      </div>
    </Modal>
  );
};

export default ModalInclusao;
