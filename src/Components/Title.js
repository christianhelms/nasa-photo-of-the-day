import React from 'react'

export default function Title() {
    var event = new Date();
    
    return (
        <div>
            <h1>Here's Your Pic of the Day for { event.toLocaleString('en', { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' }) }</h1>
        </div>
    )
}
