import Link from 'next/link'

export default async function Page() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    const firstFive = posts.slice(0, 5)
    console.log('Fetch hua — kitne posts:', posts.length)

    return (
        <div className="container">
            <h1>Posts</h1>
            {firstFive.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <Link href={`/posts/${post.id}`}>Read More →</Link>
                </div>
            ))}
        </div>
    )
}