import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Insert username'),
    email: Yup.string().email('Invalid email').required('Insert email'),
    password: Yup.string ().required('Password required')
});

const FormikForm = () => {

    return (
        <Formik initialValues={{username:'', email: '', password: ''}} validationSchema={validationSchema} onSubmit={(values) => { console.log(values);}}>
            {( isSubmitting)} => (
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field type='text' name='username'/>
                        <ErrorMessage name="username" component='div'/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type='email' name='email'/>
                        <ErrorMessage name="email" component='div'/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type='password' name='password'/>
                        <ErrorMessage name="password" component='div'/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>Register Here</button>
                    </div>
                </Form>
            )
        </Formik>
    );
};


export default FormikForm;