// Post ka blueprint
export interface WPPost {
  id: number
  slug: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
  }
}
export interface SearchParams {
  page?: string
}

export interface Params  {
    slug:string
}