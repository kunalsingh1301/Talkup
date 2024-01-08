import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
    return (
        <div
            className='
    flex
    flex-col
    justify-center
    min-h-screen
    bg-gray-100
    sm:px-8
    py-12
    lg:px-8'
        >
            <div className='
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      '>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={48}
                    height={48}
                    className='mx-auto w-auto'
                />
                <h2 className='mt-6 text-center text-3xl font-extrabold tracking-tight text-gray-900'>
                    Sign in to your account
                </h2>
            </div>
            <AuthForm/>
        </div>
    )
}
