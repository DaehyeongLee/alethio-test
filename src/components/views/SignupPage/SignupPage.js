import React from 'react';
import { Form, Input, Button } from 'antd';
import { Formik } from 'formik';
//Formik: Submit, Validation, Error message등 쉽게 적용하기 위함
import * as Yup from 'yup';
//Yup: 유효성 검사를 위함

function SignupPage() {

    return (
        <Formik
            //사용할 변수를 초기화한다.
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                phone: ''
            }}
            //유효검사 설정
            validationSchema={Yup.object().shape({
                //이메일: 이메일 형식이여야 한다.
                email: Yup.string()
                    .required('Email is required')
                    .email('Email is invalid'),
                //패스워드: 8~15자로 제한한다.
                password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password must be at least 8 characters')
                    .max(15, 'Password must be under 15 characters'),
                //컨펌패스워드: 패스워드와 일치해야한다.
                confirmPassword: Yup.string()
                    .required('Confirm Password is required')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
            })}
            //Submit시 수행
            onSubmit={(values, { setSubmitting }) => {

                setTimeout(() => {

                    let dataToSubmit = {
                        email: values.email,
                        password: values.password,
                        phone: values.phone
                    };


                    setSubmitting(false); //Submitting state를 false로 초기화
                }, 500);
            }}
        >
            {props => {
                //formik에서 제공하는 변수,함수 사용
                const values = props.values;
                const touched = props.touched;
                const errors = props.errors;
                const isSubmitting = props.isSubmitting;
                const handleChange = props.handleChange;
                const handleBlur = props.handleBlur;
                const handleSubmit = props.handleSubmit;

                return (
                    <div className="root">
                        <h2>Sign up</h2>
                        <Form style={{ minWidth: '350px' }} onSubmit={handleSubmit} >
                            {/*이메일 필드 */}
                            <Form.Item required label="Email">
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        //클릭 이후 유효성체크 걸릴 경우 input 색 다르게 함
                                        errors.email && touched.email ? 'error' : ''
                                    }
                                />
                                {/*클릭 이후 유효성체크 걸릴 경우 에러 메시지 표출 */}
                                {errors && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}
                            </Form.Item>
                            {/*패스워드 필드 */}
                            <Form.Item required label="Password">
                                <Input
                                    id="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        //클릭 이후 유효성체크 걸릴 경우 input 색 다르게 함
                                        errors.password && touched.password ? 'error' : ''
                                    }
                                />
                                {/*클릭 이후 유효성체크 걸릴 경우 에러 메시지 표출 */}
                                {errors && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                            </Form.Item>
                            {/*컨펌패스워드 필드 */}
                            <Form.Item required label="Confirm">
                                <Input
                                    id="confirmPassword"
                                    placeholder="Enter your confirmPassword"
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        //클릭 이후 유효성체크 걸릴 경우 input 색 다르게 함
                                        errors.confirmPassword && touched.confirmPassword ? 'error' : ''
                                    }
                                />
                                {/*클릭 이후 유효성체크 걸릴 경우 에러 메시지 표출 */}
                                {errors && touched.confirmPassword && (
                                    <div className="input-feedback">{errors.confirmPassword}</div>
                                )}
                            </Form.Item>
                            {/*폰넘버 필드 */}
                            <Form.Item label="Phone">
                                <Input
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    type="tel"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Item>
                            {/*Submit 버튼 필드 */}
                            <Form.Item>
                                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                    Sign Up
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                )
            }}
        </Formik>
    )


}

export default SignupPage
