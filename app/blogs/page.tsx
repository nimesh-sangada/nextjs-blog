import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Pagination from "./Pagination"
import { WPPost, SearchParams } from '@/types/wordpress'

export default async function Blogs({ searchParams}: { searchParams: SearchParams }) {
    const { page } = await searchParams
    const currentPage = Number(page) || 1
    const perPage = 3

    const response = await fetch(
        `https://logicluz.com/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}`,
        { next: { revalidate: 3600 } }
    )
    const posts:WPPost[] = await response.json()
    const totalPages = Number(response.headers.get('X-WP-TotalPages'))
    console.log(totalPages)

    return (
       


        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Blogs</h2>

            <div className="flex flex-col gap-6">
              
                {posts.map((post) => {
                    // Featured image URL
                    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

                    return (
                        <div
                            key={post.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            {/* Featured Image */}
                            {imageUrl && (
                                <div className="relative w-full h-48">
                                    <Image
                                        src={imageUrl}
                                        alt={post.title.rendered}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {post.title.rendered}
                                </h3>
                                <div
                                    className="text-gray-500 text-sm mb-4 line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                />
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    )
                })}
               
            </div>
            {/* Pagination — Client Component */}
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    )
}