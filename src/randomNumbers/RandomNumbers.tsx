import './RandomNumbers.css'
interface Props {number: number;}

const RandomNumbers = (props:Props) => {
  return (
      <div className="random-numbers">
          {props.number}
      </div>
  )
}

export default RandomNumbers;