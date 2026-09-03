import React from 'react'
import NewsPost from '../NewsPost'

const NewsFeed = () => {
    return (
        <section className="feed">
            <div className="wrap feed-inner" id="feedList">
                <NewsPost />
            </div>
        </section>
    )
}

export default NewsFeed