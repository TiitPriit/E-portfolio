import { motion } from 'framer-motion'
import Link from 'next/link'

const Home = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.6,
                    },
                },
            }}
        >
            <div className='flex px-4 md:py-32 mx-auto h-screen items-center'>
                <div className='text-center mx-auto'>
                    <h1 className='text-4xl text-black font-extrabold md:text-6xl'>
                        Oskar Kallas
                    </h1>
                    <h1 className='text-4xl text-blue-500 font-extrabold md:text-6xl'>
                        Junior Developer
                    </h1>
                    <p className='text-sm mt-4 sm:leading-relaxed md:text-xl text-black'>
                        I am a junior developer who is passionate about
                        programming and technology. I am currently studying
                        computer science at Kuressaare Ametikool. I am
                        looking for an opportunity to work in a team of
                        developers and learn from them. I am also open to
                        freelance work. I am interested in web development and
                        mobile development. I have experience with React, 
                        Next.js, Node.js. I am also familiar with Python, Java,
                        and HTML/CSS. I am fluent in English and Estonian.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 mt-8 grid-cols-2'>
                        <Link href='/contact'>
                            <a
                                className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Contact Me
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
