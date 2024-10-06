
import s from "./SearchBar.module.css"
import { Formik, Form, Field } from 'formik'

const SearchBar = ({ handleQuery }) => {
    const initialValues = {
        query: '',
    }
    const handleSubmit = values => {
      handleQuery(values.query)
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