import { Link } from 'react-router-dom'
import './index.css'

function NotFound() {
  return (
    <div className="not-found">
      <div className='not-found-itens'>
        <h1>Ops, pagina não encontrada</h1>
        <p>Erro 404</p>
        <Link to='/'>Voltar para a home</Link>
      </div>
    </div>
  )
}

export default NotFound;