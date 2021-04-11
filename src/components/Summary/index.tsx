import entradaImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'

export function Summary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="Entradas"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasImg} alt="Saidas"/>
        </header>
        <strong>- R$ 300,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$ 700,00</strong>
      </div>
    </Container>
  )
}