import { Container } from './styles';

export function TransactionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Software</td>
            <td className="deposit">R$ 10.000,00</td>
            <td>Software</td>
            <td>12/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ 300,00</td>
            <td>Mesa</td>
            <td>01/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}