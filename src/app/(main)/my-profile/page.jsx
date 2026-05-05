"use client"
import React from 'react';
import { authClient } from "@/lib/auth-client"
import { Card } from '@heroui/react';
import { Avatar } from '@heroui/react';
import { UpdateUserInfo } from '@/components/shared/UpdateUserInfo';

const MyProfilePage = () => {
    const userData = authClient.useSession();
const user = userData.data?.user;
    return (
        <div>
            <Card className='my-40  py-20 max-w-96 mx-auto text-center items-center   flex  justify-center bg-yellow-800/10  shadow-2xl  space-y-8'>
                <div><Avatar  className='w-40 h-40 '>
                      <Avatar.Image alt="user img" src={user?.image} referrerPolicy='no-referrer' />
                      <Avatar.Fallback>{user?.name?.slice(0, 2).toUpperCase()}</Avatar.Fallback>
                    </Avatar></div>

                  <div className='bg-green-500/10 rounded-2xl px-3 py-1 backdrop-blur-lg border border-white/20s shadow-2xl'>
                      <h1 className='text-2xl '>{user?.name}</h1>
                    <p className='text-multed'>{user?.email}</p>
            
                  </div>

                  <UpdateUserInfo/>
            </Card>
        </div>
    );
};

export default MyProfilePage;