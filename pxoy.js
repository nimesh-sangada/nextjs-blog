import { NextResponse } from "next/server";

export function middleware(request) {
    //check Cookies
    const token = request.cookies.get('auth_token')

    //Check token if not then redirect to login
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    //if token is set then proceed
    return NextResponse.next()

}

export const config = {
    matcher: ['/dashboard/:path*']
}