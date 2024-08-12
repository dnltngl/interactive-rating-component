import ImageStar from '../assets/images/icon-star.svg';
import React, { useState } from 'react';
import Modal from './Modal';

function LandingPage() {
    const [active, setActive] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const closeModal = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="relative">
            <section className='space-y-4 p-7 rounded-xl bg-[#1F2630] max-w-sm items-center justify-center'>
                <div className='bg-[#272E38] p-2 w-9 pt-3 pb-3 pl-3 rounded-full mb-5'>
                    <img className='h-3' src={ImageStar} alt="" />
                </div>
                <h1 className='text-2xl text-white font-Overpass font-bold'>How Did we do?</h1>
                <p className='text-neutral-LightGrey'>
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <div className='flex gap-6 mt-2 font-overpass'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button
                            key={num}
                            onClick={() => setActive(num)}
                            className={`text-sm p-4 pt-2.5 pb-2.5 rounded-full grid place-content-center ${
                                active === num ? 'bg-white text-black' : 'bg-[#272E38] text-neutral-LightGrey'
                            } hover:bg-primary-Orange hover:text-black transition-colors duration-300`}
                        >
                            {num}
                        </button>
                    ))}
                </div>
                <div className='mt-2'>
                    <button
                        onClick={handleSubmit}
                        className={`mt-6 flex justify-center place-items-center py-2.5 text-center min-w-full rounded-3xl font-normal text-sm tracking-widest transition-colors duration-300 ${
                            isSubmitted ? 'bg-white text-black' : 'bg-primary-Orange text-black'
                        } hover:bg-white hover:text-black focus:outline-none`}
                    >
                        SUBMIT
                    </button>
                </div>
            </section>

            {/* Modal */}
            <Modal isOpen={isSubmitted} onClose={closeModal} selectedRating={active} />
        </div>
    );
}

export default LandingPage;
