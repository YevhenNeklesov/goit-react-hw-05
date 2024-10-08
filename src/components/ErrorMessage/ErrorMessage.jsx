import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
      <div className={s.div}>
          <p className={s.p}>Ooops we have some trouble</p>
    </div>
  )
}

export default ErrorMessage