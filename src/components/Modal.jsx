
import React from 'react';
import thankYou from '../assets/images/thankYou.svg';

function Modal({ isOpen, onClose, selectedRating }) {
    if (!isOpen) return null;

    return (
        <main className="fixed inset-0 flex items-center justify-center bg-[#1F2630] bg-opacity-50 z-50">
            <section className="bg-[#1F2630] text-neutral-LightGrey p-11 rounded-xl max-w-sm w-full flex flex-col items-center justify-center">
                <div className=''>
                    <img className='h-20 mb-8' src={thankYou} alt="Thank You" />
                </div>
                <div className='bg-[#272E38] pb-2 pt-2 p-2 rounded-2xl'>
                <p className="text-primary-Orange text-xs ">You selected {selectedRating || 'no'} out of 5.</p>
                </div>
                <h2 className="text-xl text-white font-Overpass font-bold mb-2 mt-8">Thank you!</h2>
                <p className='text-center text-sm'>We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>
                {/* <button
                    onClick={onClose}
                    className="bg-primary-Orange text-white py-2 px-4 rounded-3xl font-normal text-sm tracking-widest"
                >
                    Close
                </button> */}
            </section>
        </main>
    );
}

export default Modal;
