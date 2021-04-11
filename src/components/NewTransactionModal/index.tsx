import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import EntradaImg from '../../assets/entradas.svg';
import SaidaImg from '../../assets/saidas.svg';
import closeImg from '../../assets/fechar.svg';
import { Container, TransactioTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTansaction(event: FormEvent) {
    event.preventDefault();
    
    const data = {
      title,
      value,
      type,
      category
    }

    api.post('transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar"/>
      </button>

      <Container onSubmit={handleCreateNewTansaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          type="text" 
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)} />
        
        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))} />

        <TransactioTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={EntradaImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={SaidaImg} alt="Saida"/>
            <span>Saída</span>
          </RadioBox>
        </TransactioTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}