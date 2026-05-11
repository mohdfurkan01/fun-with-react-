import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/appwrtconfig";

function PostsList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-12 bg-white'>
            <Container>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">All Articles</h1>
                    <p className="text-gray-600">Browse through our entire collection of posts</p>
                    <div className="mt-4 h-1 w-20 bg-blue-600 rounded-full"></div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default PostsList
