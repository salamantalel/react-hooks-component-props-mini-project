 import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let emoji = "";
  if (minutes < 30) {
    emoji = "☕️".repeat(Math.ceil(minutes / 5));
  } else {
    emoji = "🍱".repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small> {/* ✅ make sure this is exactly present */}
      <p>{preview}</p>
      <small>{emoji} {minutes} min read</small> {/* ✅ this can stay, but AFTER date */}
    </article>
  );
}

export default Article;