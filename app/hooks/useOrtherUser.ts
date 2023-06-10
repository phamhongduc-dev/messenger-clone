import { useSession } from "next-auth/react"
import { useMemo } from "react"
import { FullConversationType } from "../types"
import { User } from "@prisma/client"

const useOrtherUser = (conversation: FullConversationType | {
    users: User[]
}) => {
    const session = useSession();
    const ortherUsers = useMemo(() => {
        const currentUserEmail = session?.data?.user?.email;

        const ortherUser = conversation.users.filter(user => user.email !== currentUserEmail)
        return ortherUser[0]
    }, [session?.data?.user?.email, conversation.users])


    return ortherUsers;
}

export default useOrtherUser;