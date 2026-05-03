export default async function PostDetail({ params }) {
    // params.id se specific post fetch karo
    const { id } = await params

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const post = await response.json()

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}