const { default: Link } = require("next/link")

const Navbar = () => {
    return (
        <header className="bg-color-accent shadow-md">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-4">
                <Link href="/" className="p-2 font-bold text-2xl rounded hover:bg-color-dark hover:text-color-primary transition-all">MY LIBRARY</Link>
                <Link href="/login" className="font-bold text-lg p-2 bg-color-secondary text-color-primary transition-all hover:bg-color-dark">
                    <button>Login</button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;