import React from 'react'
import Image from 'next/image'

const NewsPost = () => {
    return (
        <>
            <div className="post-head">
                <div className="post-avatar">
                    <Image src="https://picsum.photos/" alt="Thistle Network admin" />
                </div>
                <div>
                    <div className="post-author">The Thistle Network</div>
                    <div className="post-time">1 day ago</div>
                </div>
            </div>
            <div className="post-body">
                {`That\'s`} a wrap on our Glasgow Summer Meet-Up! 60+ apprentices, one very competitive quiz, and a lot of new WhatsApp connections made. Photos are up in the Gallery now 📸
            </div>
            <Image className="post-img" src="https://picsum.photos/seed/thistle-event-a/900/560" alt="Post image" />
            <div className="post-actions">
                <div className="post-action like-btn" data-count="${post.likes}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
                    <span className="like-count">5</span>
                </div>
                <div className="post-action comment-toggle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 20l1-5.4a8.38 8.38 0 0 1 17-3.1Z"/></svg>
                    <span>5 comments</span>
                </div>
            </div>
        </>
    )
}

export default NewsPost