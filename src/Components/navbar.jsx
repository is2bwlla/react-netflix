export function Navbar() {
    return (
        <nav className='flex justify-center bg-[#141414] p-1 text-[#fff] h-[50px]'>
            <ul className='list-none mr-5 p-0 flex flex-row'>
                <li className='ml-8 text-[#fff] text-2xl'>
                    <a href="#" className="active:text-red-600 no-underline">Home</a>
                </li>
                <li className='ml-8 text-[#fff] text-2xl'>
                    <a href="#" className="active:text-red-600 no-underline">Movies</a>
                </li>
                <li className='ml-8 text-[#fff] text-2xl'>
                    <a href="#" className="active:text-red-600 no-underline">Series</a>
                </li>
            </ul>
        </nav>
    )
}