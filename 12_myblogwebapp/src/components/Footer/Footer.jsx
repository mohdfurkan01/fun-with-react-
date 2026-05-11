import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Logo width="120px" />
                    <p className="text-sm text-slate-400 text-center md:text-left max-w-xs">
                        The ultimate destination for tech insights and creative stories. Built with React and Appwrite.
                    </p>
                </div>
                <div className="flex gap-8">
                    <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                    <Link to="/all-posts" className="text-slate-400 hover:text-white transition-colors">All Posts</Link>
                    <Link to="/signup" className="text-slate-400 hover:text-white transition-colors">Join Us</Link>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center">
                <p className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Antigravity Blog. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
