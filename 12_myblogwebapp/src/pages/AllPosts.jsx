import React, { useState, useEffect } from 'react'
import { Container, PostCard, Button } from '../components'
import appwriteService from "../appwrite/appwrtconfig";
import { useNavigate } from 'react-router-dom';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-12 bg-gray-50'>
            <Container>
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Recent Posts</h1>
                    <p className="text-gray-600">Explore our latest stories and updates</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {posts.slice(0, 8).map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                
                {posts.length > 8 && (
                    <div className="flex justify-center mt-12">
                        <Button 
                            onClick={() => navigate('/posts-list')}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Click to see more
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts
