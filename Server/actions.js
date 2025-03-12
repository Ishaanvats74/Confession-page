'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const db = [
    {
        content:"Hi Namita and Ria.",
        date:"19 Feb 2025"
    }
]

export async function getPost() {
    const posts = prisma.confession.findMany()
    return posts
}

export async function createPost(content) {
    const date = new Date().toDateString()

    return await prisma.confession.create({
        data:{
            content:content,
            date : date
        }
    })
}