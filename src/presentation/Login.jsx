import React from 'react'
import Button from '../common/Forms/Button'
import Form from '../common/Forms/Form'
import Input from '../common/Forms/Input'
import useLogin from '../components/login'

const Login = ({ ...props }) => {
    const { handleSubmit, initialFormData } = useLogin()
    return (
        <section {...props} className='relative flex h-screen' >
            <div className='w-full h-full p-6 sm:p-8 md:p-2 lg:p-16 xl:p-16 2xl:p-0 flex justify-center items-center'>
                <div className='container' >
                <img src='./assets/welcome.svg' alt='welcome' className='mx-auto mb-8 sm:w-[200px] md:w-[240px] lg:w-[300px] xl:w-[300px] 2xl:w-[300px]' />
                    {/* <h1 className='text-center title-font font-medium text-3xl text-indigo-500 mb-3' >Welcome Back</h1> */}
                    <Form className="mx-auto sm:w-[350px] md:w-[340px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px]" {...{ handleSubmit }} >
                        {initialFormData.map(
                            ({ id, ...otherData }) => <Input className="mb-8" labelClass="leading-7 text-sm text-gray-600" inputClass="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" key={id} {...otherData} />
                        )}
                        <span className="float-right mb-2 cursor-pointer text-gray-500 font-medium">Forgot password?</span>
                        <Button className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" label="Login" />
                        <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0"> Don't have an account? <span className="text-indigo-500 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out cursor-pointer" >Register</span></p>
                    </Form>
                </div>
            </div>
            <div className='w-full bg-white h-full max-md:hidden bg-indigo-50 flex justify-center items-center'>
                <img alt="login_img" className='animate-bounce-slow md:w-[340px] lg:w-[450px] xl:w-[620px] 2xl:w-[635px]' src="./assets/festival.svg" />
            </div>
        </section >
    )
}

export default Login