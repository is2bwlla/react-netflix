export function Navbar() {
    return (
        <nav className='flex justify-center bg-[#5f9ea0] p-1 text-[#f0ffff] h-[50px]'>
            <ul className='list-none mr-5 p-0 flex flex-row'>
                <li className='ml-8 text-[#ffebcd] text-2xl'>
                    <a href="#" className="active:text-[#8a2be2] no-underline">Home</a>
                </li>
                <li className='ml-8 text-[#ffebcd] text-2xl'>
                    <a href="#" className="active:text-[#8a2be2] no-underline">Movies</a>
                </li>
                <li className='ml-8 text-[#ffebcd] text-2xl'>
                    <a href="#" className="active:text-[#8a2be2] no-underline">Series</a>
                </li>
            </ul>
        </nav>
    )
}