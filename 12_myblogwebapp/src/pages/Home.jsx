import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/appwrtconfig";
import {Container, PostCard, Button} from '../components'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full'>
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-20 mb-12">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
                            Welcome to <span className="text-blue-500">Antigravity</span> Blog
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                            Discover insightful articles, tutorials, and stories from our passionate community of writers.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button onClick={() => navigate('/all-posts')} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-medium">
                                Start Reading
                            </Button>
                            <Button onClick={() => navigate('/add-post')} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-lg font-medium">
                                Write a Post
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Latest Stories</h2>
                        <p className="text-slate-500 mt-2">Recently published articles you might like</p>
                    </div>
                    <Link to="/all-posts" className="text-blue-600 font-semibold hover:underline flex items-center">
                        View All
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12'>
                    {posts.slice(0, 8).map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
