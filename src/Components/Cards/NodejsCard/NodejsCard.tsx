import '../Card.css'
import NodejsImage from '../../../assets/nodejs.png'
import { Link , } from 'react-router-dom'

function Card() {
  return (
    <article className="card">
      <img
        className="card__background"
        src={NodejsImage}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">Node.js</h2>
          <p className="card__description">
            AVR microcontrollers are used in many devices around us like cars,
            medical equipment, and home appliances. Learning AVR programming can
            help you develop skills that are in high demand in today's job
            market.
          </p>
        </div>

        <Link className="btn-title" to="/form">
          <button className="card__button">Join Us</button>
        </Link>
      </div>
    </article>
  )
}

export default Card