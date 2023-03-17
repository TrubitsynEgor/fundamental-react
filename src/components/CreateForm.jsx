import React, { useState } from 'react'
import MyButton from './UI/buttons/MyButton'
import MyInput from './UI/inputs/MyInput'

const CreateForm = ({ createPost }) => {

	const [post, setPost] = useState({
		title: '',
		body: '',
	})

	const handleTitleChange = (event) => {
		setPost({ ...post, title: event.target.value })
	}
	const handleBodyChange = (event) => {
		setPost({ ...post, body: event.target.value })
	}

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = { ...post, id: Date.now() }
		createPost(newPost)
		setPost({
			title: '',
			body: '',
		});
	}


	return (
		<form className='create-form' >
			<MyInput value={post.title} onChange={handleTitleChange} type='text' placeholder='Post name' />
			<MyInput value={post.body} onChange={handleBodyChange} type='text' placeholder='Post Body' />
			<MyButton onClick={addNewPost}>Create post</MyButton>
		</form>
	)
}

export default CreateForm