import React from "react";
import {ErrorMessage, Field,Form, Formik} from "formik";
import {initialValues, validationSchema} from "./constants.ts";
import {LoginData} from "../../models/login.ts";

const Login: React.FC = () => {

    const handleSubmit = async (values: LoginData) => {
        try {
            const response = fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    username: values.username,
                    password: values.password
                })
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Увійти до аккаунта
                        </h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            validateOnBlur={false}
                            validateOnChange={false}
                            onSubmit={handleSubmit}
                        >
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Ваша пошта
                                    </label>
                                    <Field
                                        type="email"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                    />
                                    <ErrorMessage name="username" component="span" className="text-black text-red-700"/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Пароль
                                    </label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <ErrorMessage name="password" component="span" className="text-black text-red-700"/>
                                </div>

                                <button type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
                                >Увійти
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;