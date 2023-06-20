'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/prompts/user/${params.id}`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name='My'
      desc={`Welcome to ${userName}'s personalized profile page. Share ${userName}'s exceptional prompts and inspire others with the power of your imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
