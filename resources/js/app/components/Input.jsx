import React, { useEffect } from "react";

export default function FormFieldInput({
    name,
    type,
    label,
    errorMessage,
    onChange,
    autofocus,
    value,
}) {
    useEffect(() => {

        const handleKeyPress = (event) => {
            if ((event.key === 'F' || event.key === 'f') && autofocus) {
                // If 'F' key is pressed and autofocus prop is true
                document.getElementById(name).focus();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [autofocus, name]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowUp') {
                document.getElementById(name).blur();
            } else if (event.key === 'ArrowDown') {
                document.getElementById(name).blur();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            <div className="relative">
                <input
                    autoFocus={autofocus}
                    onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ''))}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    className="ring-offset-2 ring-2 ring-black peer text-black placeholder-transparent w-full py-2.5 px-5 border-slate-300 border bg-transparent rounded-lg bg-white focus-within:outline-none focus-within:border-blue-400"
                    placeholder=""
                />
                <label
                    htmlFor={name}
                    className="absolute left-2.5 px-2.5 transition-all bg-white text-black text-sm -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white"
                >
                    {label}
                </label>
            </div>

            {errorMessage && (
                <p className="text-red-500 text-sm mt-1.5 font-light">{errorMessage}</p>
            )}
        </div>
    );
}
