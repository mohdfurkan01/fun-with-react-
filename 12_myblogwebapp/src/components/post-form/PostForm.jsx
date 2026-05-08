import React, {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, RTE} from '../index'
import appwriteService from "../../appwrite/appwrtconfig"
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { toast } from 'react-hot-toast'
import { Loader } from '../index'

export default function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues, formState: {isValid}} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'inactive',
        },
        mode: "onChange" // Essential for real-time validation tracking
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
    const [loading, setLoading] = React.useState(false)
    const [imagePreview, setImagePreview] = React.useState(null)
    const [isImageProcessing, setIsImageProcessing] = React.useState(false)
    const [uploadProgress, setUploadProgress] = React.useState(0)

    const watchImage = watch("image")
    const watchAllFields = watch() // To monitor form completeness

    const submit = async (data) => {
        setLoading(true)
        try {
            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
                if (file) {
                    appwriteService.deleteFile(post.featuredImage)
                }
                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage
                })
                if (dbPost) {
                    toast.success("Post updated successfully!")
                    navigate(`/post/${dbPost.$id}`)
                }
            } else {
                const file = await appwriteService.uploadFile(data.image[0])
                if (file) {
                    const fileId = file.$id
                    data.featuredImage = fileId
                    const dbPost = await appwriteService.createPost({
                        ...data,
                        userId: userData.$id
                    })
                    if (dbPost) {
                        toast.success("Post created successfully!")
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        } catch (error) {
            toast.error(error.message || "Failed to submit post")
        } finally {
            setLoading(false)
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-')
        }
        return ''
    }, [])

    React.useEffect(() => {
        const subscription = watch((value, {name}) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), {shouldValidate: true})
            }
        })

        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])

    React.useEffect(() => {
        if (watchImage && watchImage.length > 0) {
            setIsImageProcessing(true)
            setUploadProgress(0)
            
            // Simulate upload progress (slower speed)
            const interval = setInterval(() => {
                setUploadProgress(prev => {
                    if (prev >= 95) { // Stop at 95 until it's "finished"
                        clearInterval(interval)
                        return 95
                    }
                    return prev + 5
                })
            }, 100) // 100ms * 19 = ~2 seconds

            const file = watchImage[0]
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
                setTimeout(() => {
                    setUploadProgress(100)
                    setTimeout(() => setIsImageProcessing(false), 400)
                    clearInterval(interval)
                }, 3000) // Keep the loader visible for 1500 1.5 seconds
            }
            reader.readAsDataURL(file)
        } else {
            setImagePreview(null)
            setIsImageProcessing(false)
            setUploadProgress(0)
        }
    }, [watchImage])

    // Auto-update status when form is valid (Now strictly checking content)
    React.useEffect(() => {
        const isContentFilled = watchAllFields.content && watchAllFields.content.trim().length > 0 && watchAllFields.content !== '<p></p>'
        const isFormTrulyValid = isValid && isContentFilled && (watchImage?.length > 0 || post)

        if (isFormTrulyValid) {
            setValue('status', 'active')
        } else {
            setValue('status', 'inactive')
        }
    }, [isValid, watchAllFields.content, watchImage, post, setValue])

    // Extra check for button color to ensure RTE is filled
    const isButtonActive = isValid && watchAllFields.content && watchAllFields.content.trim().length > 0 && watchAllFields.content !== '<p></p>' && (watchImage?.length > 0 || post)

    return (
        <>
            {loading && <Loader />}
            <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-gray-50 p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-2/3 px-4">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-6 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className="mb-6 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <div className="mb-6">
                        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                    </div>
                </div>
                <div className="w-1/3 px-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
                        <Input
                            label="Featured Image :"
                            type="file"
                            className="mb-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("image", { required: !post })}
                        />
                        
                        {/* Image Preview with Progress Bar */}
                        <div className="relative">
                            {isImageProcessing && (
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs font-bold text-emerald-600 animate-pulse">UPLOADING...</span>
                                        <span className="text-xs font-bold text-emerald-600">{uploadProgress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden border border-gray-200">
                                        <div 
                                            className="bg-emerald-500 h-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                            style={{ width: `${uploadProgress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                            
                            {imagePreview ? (
                                <div className="w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    <p className="text-sm text-gray-500 mb-2 font-medium">New Selection:</p>
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="rounded-xl shadow-md border-2 border-emerald-400 object-cover max-h-48 w-full transition-all duration-500"
                                    />
                                </div>
                            ) : post && (
                                <div className="w-full mb-4">
                                    <p className="text-sm text-gray-500 mb-2 font-medium">Current Image:</p>
                                    <img
                                        src={appwriteService.getFilePreview(post.featuredImage)}
                                        alt={post.title}
                                        className="rounded-xl shadow-md border-2 border-gray-100 object-cover max-h-48 w-full"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
                        <label className='inline-block mb-2 pl-1 text-sm font-semibold text-gray-700 uppercase tracking-wider'>Status</label>
                        <select
                            className="px-4 py-2.5 rounded-xl bg-gray-50 text-black outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 border border-gray-200 w-full font-medium"
                            {...register("status", { required: true })}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <Button 
                        type="submit" 
                        bgColor={isButtonActive ? "bg-emerald-500" : "bg-gray-400"} 
                        className={`w-full py-3 text-lg font-bold rounded-xl shadow-lg transition-all duration-500 ${isButtonActive ? "hover:bg-emerald-600 hover:shadow-emerald-200" : "cursor-not-allowed"}`}
                        disabled={!isButtonActive}
                    >
                        {post ? "Update Post" : "Publish Post"}
                    </Button>
                </div>
            </form>
        </>
    )
}
