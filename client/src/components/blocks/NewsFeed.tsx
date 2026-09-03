'use client';

import React, { useState } from 'react';
import NewsPost from '../NewsPost'; // assuming NewsPost is in same folder

type PostType = {
    id: number;
    pinned?: boolean;
    time: string;
    body: string;
    image?: string;
    likes: number;
    comments: { name: string; text: string }[];
};

const initialPosts: PostType[] = [
    {
        id: 1,
        pinned: true,
        time: '2 hours ago',
        body: "📌 Registration for our Edinburgh Insight Night (24 Sept) is now open! Spaces are limited to keep the speed-networking rounds meaningful, so register sooner rather than later — link in the Events section.",
        likes: 34,
        comments: [
            { name: 'Priya M.', text: 'So excited for this one 🙌' },
            { name: 'Callum R.', text: 'Will there be a hybrid/online option for anyone not in Edinburgh?' },
        ],
    },
    {
        id: 2,
        time: '1 day ago',
        body: "That's a wrap on our Glasgow Summer Meet-Up! 60+ apprentices, one very competitive quiz, and a lot of new WhatsApp connections made. Photos are up in the Gallery now 📸",
        image: 'https://picsum.photos/seed/thistle-event-a/900/560',
        likes: 58,
        comments: [
            { name: 'Aisha K.', text: 'Best night out in ages, thank you Thistle team!' },
            { name: 'Duncan F.', text: 'The quiz round was brutal 😂 already looking forward to the next one' },
            { name: 'Emma S.', text: 'Loved meeting other apprentices outside my own sector' },
        ],
    },
    {
        id: 3,
        time: '5 days ago',
        body: "Huge thanks to EY for hosting our Apprenticeship Insight Day in Edinburgh — mock interviews, a Q&A panel, and honest advice from current apprentices on switching sectors mid-programme. If you registered but couldn't make it, we'll be sharing a recap resource soon.",
        image: 'https://picsum.photos/seed/thistle-event-g/900/560',
        likes: 41,
        comments: [
            { name: 'Ryan B.', text: 'The mock interview feedback was so useful, thank you!' },
        ],
    },
    // Add more posts as needed
];

export default function NewsFeed() {
    const [posts, setPosts] = useState<PostType[]>(initialPosts);
    const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
    const [openComments, setOpenComments] = useState<Set<number>>(new Set());

    const toggleLike = (id: number) => {
        setLikedIds((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };

    const toggleComments = (id: number) => {
        setOpenComments((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };

    const addComment = (id: number, text: string) => {
        setPosts((prev) =>
            prev.map((post) =>
                post.id === id
                    ? { ...post, comments: [...post.comments, { name: 'You', text }] }
                    : post
            )
        );
    };

    return (
        <section className="feed">
            <div className="wrap feed-inner" id="feedList">
                {posts.map((post) => (
                    <NewsPost
                        key={post.id}
                        post={post}
                        isLiked={likedIds.has(post.id)}
                        commentsOpen={openComments.has(post.id)}
                        onLike={() => toggleLike(post.id)}
                        onToggleComments={() => toggleComments(post.id)}
                        onAddComment={(text: string) => addComment(post.id, text)}
                    />
                ))}
            </div>
        </section>
    );
}