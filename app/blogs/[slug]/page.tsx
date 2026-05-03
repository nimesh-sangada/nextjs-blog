import React from "react"
import Link from "next/link"
import Image from "next/image"
import { WPPost, Params } from "@/types/wordpress"
import Header from '../../components/Header'

export default async function BlogDetail({ params }:{params :Params  }) {
    const { slug } = await params 
    const response = await fetch(
        `https://logicluz.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
        { next: { revalidate: 3600 } }
    )
    const posts = await response.json()
    const post: WPPost = posts[0]
    


    if (!post) {
        return (
            <>
            <Header />
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 m-6">Post nahi mila 😢</h1>
                <p>Yeh post exist nahi karta.</p>
                </div>
            </>
        )
    }
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0].source_url

    return (
        <>
            <Header />
        <div className="max-w-3xl mx-auto px-4 py-8">
            {featuredImage && (
                <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden">
                    <Image
                        src={featuredImage}
                        alt={post.title.rendered}
                        fill
                        className="object-cover"
                    />
                </div>

            )

            }
            <h1 className="text-3xl font-bold text-gray-800 m-6">{post.title.rendered}</h1>
            <div className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

            <Link className="text-blue-600  hover:underline inline-block mb-4 mt-2 px-4 text-xl" href={'/blogs'}>Back</Link>
            </div>
            </>
    )
}