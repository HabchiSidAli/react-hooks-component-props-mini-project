import React from 'react';

function Article({title, date = "January 1, 1970", preview, minutes}) {
    
    let emojis;
    
    if (minutes <= 5) {
        emojis = "☕️";
    } else if (minutes < 30) {
        emojis = "☕️".repeat(Math.round(minutes / 5))
    } else {
        emojis = "🍱".repeat(Math.round(minutes / 10))
    }
    

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
};

export default Article;