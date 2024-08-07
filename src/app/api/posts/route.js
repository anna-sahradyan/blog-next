import {NextResponse} from "next/server";
import prisma from "@/utils/connect";
import {getAuthSession} from "@/utils/auth";

export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const cat = searchParams.get('cat');
    const POST_PER_PAGE = 2;
    const skip = POST_PER_PAGE * (page - 1);

    try {
        const posts = await prisma.post.findMany({
            take: POST_PER_PAGE,
            skip: skip,
            where:{
                ...(cat && {catSlug: cat})
            }
        });

        const totalPosts = await prisma.post.count({where:posts.where});
        const hasPrev = page > 1;
        const hasNext = skip + POST_PER_PAGE < totalPosts;

        return new NextResponse(JSON.stringify({
            data: posts,
            hasPrev: hasPrev,
            hasNext: hasNext
        }), {status: 200});
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, {status: 500})
        );
    }
};
//!Create a post
export const POST = async (req) => {
    const session =  await getAuthSession();
    console.log(session)
    if (!session) {
        return new NextResponse(
            JSON.stringify({message: "Not authenticated!"}, {status: 401})
        );
    }
    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: {...body, userEmail: session.user.email}
        });

        return new NextResponse(JSON.stringify(post, {status: 200}));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, {status: 500})
        );
    }
};

