import React from 'react';
import { BsX } from 'react-icons/bs';
import { Button } from '../Button/Button';

interface ModalProps {
    variant: "light" | "dark";
    title?: string;
    description?: string;
    accept: string;
    reject?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
    variant,
    title,
    accept,
    reject,
    description,
    children,
    onClick,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Button label='Toggle Modal' onClick={toggleModal} variant='primary' />

            {isOpen && (
                <div
                    id="static-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    className="absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className={`relative p-4 w-full max-w-2xl max-h-full ${variant === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} rounded-lg shadow`}>
                        <header className={`flex items-center justify-between p-4 border-b rounded-t ${variant === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
                            <h2 id="modal-title" className="text-xl font-semibold">
                                {title}
                            </h2>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className={`text-gray-400 bg-transparent ${variant === 'dark' ? 'hover:bg-gray-600 hover:text-white' : 'hover:bg-gray-200 hover:text-gray-900'} rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center`}
                            >
                                <BsX className='font-semibold text-xl' />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </header>
                        {children ?? (
                            <section className="p-4 space-y-4">
                                <p className={`text-base leading-relaxed ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {description}
                                </p>
                            </section>
                        )}
                        <footer className={`flex items-center p-4 border-t rounded-b ${variant === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
                            <button
                                onClick={onClick}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {accept}
                            </button>
                            {reject &&
                                <button
                                    onClick={toggleModal}
                                    className={`py-2.5 px-5 ms-3 text-sm font-medium ${variant === 'dark' ? 'text-gray-400 bg-gray-800 border-gray-600 hover:bg-gray-700 hover:text-white' : 'text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700'} focus:z-10 focus:ring-4 ${variant === 'dark' ? 'focus:ring-gray-700' : 'focus:ring-gray-100'} rounded-lg`}
                                >
                                    {reject}
                                </button>
                            }
                        </footer>
                    </div>
                </div>
            )}
        </>
    );
};
