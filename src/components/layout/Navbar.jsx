function Navbar() {
    return(
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
            <div className="container-custom h-20 flex items-center justify-between">
                <h1 className="text-2xl font-semibold">
                    Shradha Group
                </h1>

                <nav className="hidden lg:flex items-center gap-10">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    < a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;