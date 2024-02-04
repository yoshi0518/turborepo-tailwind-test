/* eslint-disable */
export type Activity = {
  id?: number | undefined
  title?: string | null | undefined
  dueDate?: string | undefined
  completed?: boolean | undefined
}

export type Author = {
  id?: number | undefined
  idBook?: number | undefined
  firstName?: string | null | undefined
  lastName?: string | null | undefined
}

export type Book = {
  id?: number | undefined
  title?: string | null | undefined
  description?: string | null | undefined
  pageCount?: number | undefined
  excerpt?: string | null | undefined
  publishDate?: string | undefined
}

export type CoverPhoto = {
  id?: number | undefined
  idBook?: number | undefined
  url?: string | null | undefined
}

export type User = {
  id?: number | undefined
  userName?: string | null | undefined
  password?: string | null | undefined
}
