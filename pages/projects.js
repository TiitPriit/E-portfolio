import {FiGithub} from 'react-icons/fi'
// import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from 'next/image'
import Head from 'next/head'

const projects = () => {
    return (
        <div className='h-screen mx-5 sm:mx-auto pt-32'>
            <Head>
                <title>Projects | Oskar Kallas</title>
            </Head>
            <h1 className='font-bold text-3xl text-center'></h1>
            <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Bookstore backend</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-5 aspect-h-3'>
                            <Image src='/images/project-images/images.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            This is a backend for a bookstore website. It is made using php and mysql. It has features like a searchbar, delete, update, add, etc.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Php, HTML, CSS, Mysql
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/prasad-chavan1/Animesthetic-Social-Media' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>lorem lorem lorem</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-4 aspect-h-3'>
                            <Image src='/images/project-images/images.png' layout='fill' objectFit='contain' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            lorem 
                            <a className='text-blue-500' href=''></a>  
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    lorem
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default projects
