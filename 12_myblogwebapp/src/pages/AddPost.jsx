import React from 'react'
import { Container } from '../components'
import { PostForm } from '../components'

import { useNavigate } from 'react-router-dom';

function AddPost() {
  const navigate = useNavigate();
  return (
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
                    Go Back
                </button>
            </div>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
