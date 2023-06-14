import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { pusherServer } from "@/app/libs/pusher";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    const session = await getServerSession(request, response, authOptions);

    if (!session?.user?.email) {
        return response.status(401);
    }

    const soketId = request.body.soketId;
    const channle = request.body.channle_name;
    const data = {
        user_id: session.user.email
    }

    const authResponse = pusherServer.authorizeChannel(soketId, channle, data);

    return response.send(authResponse)
}