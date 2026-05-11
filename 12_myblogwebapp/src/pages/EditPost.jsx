import React, {useEffect, useState} from 'react'
import {Container} from '../components'
import PostForm from '../components/post-form/PostForm'
import appwriteService from "../appwrite/appwrtconfig";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-12 bg-white min-h-screen'>
        <Container>
            <div className="mb-6">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors group"
                >
                    <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Discard Changes
                </button>
            </div>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
