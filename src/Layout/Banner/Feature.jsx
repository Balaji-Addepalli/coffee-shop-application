import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Feature.module.css'
const Feature = (props) => {
  return (
    <div className={classes['feature']}>
        <div>{props.children}</div>
        <FontAwesomeIcon icon="fa-solid fa-mug-hot" />
        <div>{props.description}</div>
    </div>
  )
}

export default Feature