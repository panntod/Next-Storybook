import React from 'react';
import { BsX } from 'react-icons/bs';

interface ModalProps {
    variant: "light" | "dark";
    title: string;
    description: string;
    accept: string;
    reject?: string;
    onClick?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
    variant,
    title,
    accept,
    reject,
    description,
    onClick,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className={
                    [
                        "block text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                        variant === "dark" ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
                    ].join(" ")}
                type="button"
            >
                Toggle modal
            </button>

            {isOpen && (
                <div
                    id="static-modal"
                    className="absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className={`relative p-4 w-full max-w-2xl max-h-full ${variant === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} rounded-lg shadow`}>
                        <div className={`flex items-center justify-between p-4 border-b rounded-t ${variant === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
                            <h3 className="text-xl font-semibold">
                                {title}
                            </h3>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className={`text-gray-400 bg-transparent hover:${variant === 'dark' ? 'bg-gray-600 hover:text-white' : 'bg-gray-200 hover:text-gray-900'} rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center`}
                            >
                                <BsX className='font-semibold text-xl' />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 space-y-4">
                            <p className={`text-base leading-relaxed ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                {description}
                            </p>
                        </div>
                        <div className={`flex items-center p-4 border-t rounded-b ${variant === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
                            <button
                                onClick={onClick}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {accept}
                            </button>
                            <button
                                onClick={toggleModal}
                                className={`py-2.5 px-5 ms-3 text-sm font-medium ${variant === 'dark' ? 'text-gray-400 bg-gray-800 border-gray-600 hover:bg-gray-700 hover:text-white' : 'text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700'} focus:z-10 focus:ring-4 ${variant === 'dark' ? 'focus:ring-gray-700' : 'focus:ring-gray-100'} rounded-lg`}
                            >
                                {reject}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
