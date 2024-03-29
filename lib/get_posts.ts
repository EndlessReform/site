import fs from 'fs'
import { readdir } from 'fs/promises'
import { readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { Metadata } from 'next'

export type ReadingFrontmatter = {
  id: string
  title: string
  written: string
  author?: string
  stars?: number
  tags?: string
}

export type WritingFrontmatter = {
  id: string
  title: string
  written: string
  tags?: string
  summary?: string
}

export async function getSortedPostsData(folder: string) {
  // Get file names under /posts
  const postsDirectory = path.join(process.cwd(), 'posts', folder)
  const fileNames = await readdir(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      written: matterResult.data.written,
      ...matterResult.data,
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ written: a }, { written: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

/** Get all valid posts from posts */
export async function getSlugsFromFolder(folder: string) {
  let p = path.join(process.cwd(), 'posts', folder)
  const allFiles = await readdir(p)
  const fileNames = allFiles.filter((fname) => fname.split('.').pop() == 'mdx')
  return fileNames.map((fname) => ({
    slug: fname.replace(/\.mdx/, ''),
  }))
}

/** Convenience function to get MDX name */
export const makeFullPath = (folder: string, slug: string) =>
  path.join(process.cwd(), 'posts', `${folder}`, `${slug}.mdx`)

/** Convenience function to get sane page title */
export async function makeMetadata(
  folder: string,
  slug: string
): Promise<Metadata> {
  const mdxPath = makeFullPath(folder, slug)
  const mdxSource = await readFile(mdxPath, 'utf-8')
  const metadata = matter(mdxSource).data as ReadingFrontmatter

  return {
    title: `${metadata.title}`,
    description: `Short notes on ${metadata.title} by ${metadata.author}`,
  }
}
