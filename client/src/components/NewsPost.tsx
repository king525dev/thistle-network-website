import React, { useState } from 'react';
import Image from 'next/image';

type CommentType = {
    name: string;
    text: string;
};

type PostType = {
    id: number;
    pinned?: boolean;
    time: string;
    body: string;
    image?: string;
    likes: number;
    comments: CommentType[];
};

interface NewsPostProps {
    post: PostType;
    isLiked: boolean;
    commentsOpen: boolean;
    onLike: () => void;
    onToggleComments: () => void;
    onAddComment: (text: string) => void;
}

export default function NewsPost({
    post,
    isLiked,
    commentsOpen,
    onLike,
    onToggleComments,
    onAddComment,
}: NewsPostProps) {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (commentText.trim()) {
            onAddComment(commentText.trim());
            setCommentText('');
        }
    };

    return (
        <article className="post reveal in">
            <div className="post-head">
                <div className="post-avatar">
                    <img src="/logo.svg" alt="Thistle Network admin" />
                </div>
                <div>
                    <div className="post-author">The Thistle Network</div>
                    <div className="post-time">{post.time}</div>
                </div>
                {post.pinned && <span className="post-pin">Pinned</span>}
            </div>

            <div className="post-body">{post.body}</div>

            {post.image && (
                <img className="post-img" src={post.image} alt="Post image" />
            )}

            <div className="post-actions">
                <div
                    className={`post-action like-btn ${isLiked ? 'liked' : ''}`}
                    onClick={onLike}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                    <span className="like-count">{post.likes + (isLiked ? 1 : 0)}</span>
                </div>

                <div className="post-action comment-toggle" onClick={onToggleComments}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 20l1-5.4a8.38 8.38 0 0 1 17-3.1Z" />
                    </svg>
                    <span>
                        {post.comments.length} comment{post.comments.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {commentsOpen && (
                <div className="post-comments open">
                    <div className="comment-list">
                        {post.comments.map((c, idx) => (
                            <div key={idx} className="comment">
                                <div className="comment-avatar">
                                    {c.name
                                        .split(' ')
                                        .map((w) => w[0])
                                        .join('')
                                        .slice(0, 2)
                                        .toUpperCase()}
                                </div>
                                <div className="comment-bubble">
                                    <b>{c.name}</b>
                                    {c.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="comment-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            required
                        />
                        <button type="submit" aria-label="Send comment">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="m3 20 18-8L3 4v6l12 2-12 2v6Z" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </article>
    );
}