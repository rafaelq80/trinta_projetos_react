
function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">VR Launch</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li className="hover:text-gray-300 cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer">
                            Features
                        </li>
                        <li className="hover:text-gray-300 cursor-pointer">
                            Pricing
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header