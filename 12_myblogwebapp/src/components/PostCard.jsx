import React from 'react'
import appwriteService from "../appwrite/appwrtconfig"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block h-full">
            <div className='w-full bg-white dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl group h-full flex flex-col'>
                <div className='w-full aspect-square overflow-hidden rounded-xl mb-4 relative'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out' 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                    <h2 className='text-lg font-semibold text-gray-800 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors'>
                        {title}
                    </h2>
                    <div className="mt-3 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                        Read more
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
