export default function FormFieldInput({ name, type, label, errorMessage, onChange, autofocus,value }) {
    return (
        <div>
            <div className='relative' >
                <input
                    autoFocus={autofocus}
                    onChange={(e) => onChange(e.target.value)}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    className='ring-offset-2 ring-2 ring-black peer text-black placeholder-transparent w-full py-2.5 px-5 border-slate-300 border bg-transparent rounded-lg bg-white focus-within:outline-none focus-within:border-blue-400' placeholder="" />
                <label htmlFor={name} className='absolute left-2.5 px-2.5 transition-all bg-white text-black text-sm -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2.5 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white'>{label}</label>
            </div >

            {errorMessage && (
                <p className='text-red-500 text-sm mt-1.5 font-light'>{errorMessage}</p>
            )}

        </div>

    )
}