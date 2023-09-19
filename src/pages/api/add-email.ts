import type { APIRoute } from "astro";
import { db } from "../../lib/db";
import { emails } from "../../lib/db/schema";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
    return new Response(JSON.stringify({ message: "HELLO FROM THE SERVER" }));
};

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email") as string;

    if (!email) {
        return new Response(JSON.stringify({ message: "No email provided", error: true }));
    }

    try {
        await db.insert(emails).values({
            email
        });
    } catch (e) {
        console.log({ e });
        return new Response(JSON.stringify({ message: "You were already subscribed!", error: true }));
    }

    return new Response(JSON.stringify({ message: "Thanks! You are subscribed!" }));
};
