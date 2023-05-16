import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

export const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Интернет магазин',
            img: 'internet-magazin.png'
        },
        {
            id: 2,
            name: 'Телеграм',
            img: 'telegram.png'
        },
        {
            id: 3,
            name: 'Разработка сайта',
            img: 'deadline.png'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        const index = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    }

    const goToNextSlide = () => {
        const index = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    }
    return (
        <div id='portfolio' className='bg-[#1E1E1E] pt-5 flex flex-col items-center'>
            <h1 className='text-5xl text-center text-white'>Мои проекты</h1>
            <div className='relative flex justify-between w-[100%] px-10 h-[100vh] items-center'>
                <BsFillArrowLeftCircleFill onClick={goToPrevSlide} className='text-[#E2A000] text-4xl hover:text-[#E24A05] cursor-pointer' />
                {projects.map((project, index) =>
                    (index === currentIndex - 1 || (currentIndex === 0 && index === projects.length - 1))
                    && (
                        <div
                            key={project.id}
                            className='w-[80%] h-[80%]'
                        >
                            <h1 className='text-white text-3xl text-center mb-2'>{project.name}</h1>
                            <a href="/"><img className='h-[100%] w-[100%]' src={project.img} alt={project.name} /></a>
                        </div>
                    )

                )}
                <BsFillArrowRightCircleFill onClick={goToNextSlide} className='text-[#E2A000] text-4xl hover:text-[#E24A05] cursor-pointer' />
            </div>
        </div>
    )
}
