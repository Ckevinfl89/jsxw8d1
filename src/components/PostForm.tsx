import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Post = {
    id: number,
    title: string
}

type PostFormProps = {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e:React.FormEvent) => void,
    newPost: Post
    isLoggedIn: boolean
}

export default function PostForm({ handleChange, handleSubmit, newPost, isLoggedIn }: PostFormProps) {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Post Title</Form.Label>
            <Form.Control name='title' onChange={handleChange} value={newPost.title} />
            <Button className='mt-3 w-100' variant='warning' type='submit' disabled={!isLoggedIn}>Create Post</Button>
        </Form>
    )
}