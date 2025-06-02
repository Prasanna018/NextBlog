import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server'

import React from 'react'

async function layout({ children }: { children: React.ReactNode }) {
    const user = await currentUser();
    console.log(user);
    if (user) {

        const loggedUser = await prisma.user.findUnique({
            where: {
                clerkId: user?.id
            }
        })

        if (!loggedUser) {
            await prisma.user.create({
                data: {
                    name: `${user?.fullName} ` as string,
                    clerkId: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    imageUrl: user?.imageUrl
                }
            })
        };
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default layout
