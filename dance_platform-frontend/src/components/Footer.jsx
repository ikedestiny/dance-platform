export default function Footer() {
    return (
        <footer className="mt-20 bg-neutral-900 text-neutral-300 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-semibold text-orange-500 mb-4">EchoDance</h2>
                    <p className="text-sm leading-relaxed">
                        A platform to share artistic expressions through images and dance videos. Explore creativity, movement, and inspiration.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-500 font-semibold mb-3">Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
                        <li><a href="/upload" className="hover:text-orange-400 transition-colors">Upload</a></li>
                        <li><a href="/about" className="hover:text-orange-400 transition-colors">About</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-orange-500 font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-orange-400 transition"><i className="fab fa-instagram" /></a>
                        <a href="#" className="hover:text-orange-400 transition"><i className="fab fa-youtube" /></a>
                        <a href="#" className="hover:text-orange-400 transition"><i className="fab fa-twitter" /></a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 text-xs text-neutral-500">
                © {new Date().getFullYear()} EchoDance. All rights reserved.
            </div>
        </footer>

    )
}