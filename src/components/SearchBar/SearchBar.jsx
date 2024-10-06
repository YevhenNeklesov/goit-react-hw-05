
import s from "./SearchBar.module.css"
import { Formik, Form, Field } from 'formik'
import toast from "react-hot-toast";

const SearchBar = ({ handleQuery }) => {
    const initialValues = {
        query: '',
    }
    const handleSubmit = values => {
      handleQuery(values.query)
      !values.query && toast("Need to fill the field", {
        duration: '400',
        position: 'top-right'
      })
  }

  return (
      <div className={s.container}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className={s.form}>
                  <Field
                      className={s.input}
                      placeholder=""
                      name='query' 
                  />
                  <button className={s.btn} type='submit'>Search</button>
              </Form>
          </Formik>
    </div>
  )
}

export default SearchBar