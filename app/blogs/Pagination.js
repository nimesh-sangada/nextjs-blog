'use client'
import { useRouter } from 'next/navigation'


export default function Pagination({ currentPage, totalPages }) {
    const router = useRouter()

    const goToPage = (page) => {
        router.push(`/blogs?page=${page}`)
    }
    const getPagination = (currentPage, totalPages) => {
        const pages = [];
        const jumpSize = 10;

        // Always show first 3 pages
        for (let i = 1; i <= Math.min(3, totalPages); i++) {
            pages.push(i);
        }

        // Show dots if needed
        if (currentPage > 4) {
            pages.push("...");
        }

        // Jump page
        let jumpPage = currentPage + jumpSize;
        if (jumpPage > totalPages) {
            jumpPage = totalPages;
        }

        // Avoid duplicate
        if (jumpPage > 3) {
            pages.push(jumpPage);
        }

        return pages;
    };



    return (
        <div className="flex w-3xl flex-wrap items-center justify-center gap-2 mt-8">
            {/* Prev Button */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                ← Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 rounded-lg ${currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next →
            </button>
        </div>
    )
}