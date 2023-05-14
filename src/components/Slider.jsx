import React from 'react'

export const Slider = () => {
    return (
        <div className='flex px-4 py-10' style={{ backgroundImage: 'url(bg.jpg)' }}>
            <div className='w-[50%] flex rounded-xl items-center flex-col gap-5 text-white bg-black/50 py-3'>
                <h1 className='text-3xl'>Я Искандар Гадойбоев,</h1>
                <p className=' text-2xl text-justify w-[80%]'> фронтенд-разработчик. Моя специализация - создание интерактивных и
                    визуально привлекательных пользовательских интерфейсов для веб-приложений и веб-сайтов.
                    Мои навыки включают в себя владение HTML, CSS и JavaScript, а также фреймворками и библиотеками,
                    такими как React.
                    У меня есть опыт создания адаптивных интерфейсов, обеспечивая оптимальный пользовательский
                    опыт на всех устройствах. Я также знаком с системами контроля версий, такими как Git, и имею
                    опыт работы в коллаборативной среде с другими разработчиками и дизайнерами.</p>
                <button className='border-2 hover:scale-[1.02] border-gray-400  px-4 py-2 rounded-md text-xl '>Скачать CV</button>
            </div>
            <div className='w-[50%] flex justify-center'>
                <img className='w-[600px] h-[550px] rounded-xl' src="Iskandar.jpg" alt="iskandar" />
            </div>
        </div>
    )
}
