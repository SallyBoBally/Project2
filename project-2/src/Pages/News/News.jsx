import React from 'react';

function News() {
  return (
    <div className="news-page">
      <main className="news-main">    
        <section className="news-articles">
          <article className="news-article">
            <h3>Latest Set</h3>
            <p>New set release date.</p>
            <a className="button">Read More</a>
          </article>
        <article className="news-article">
          <h3>Japan News</h3>
          <p>Latest news from Japan </p>
          <a className="button">Read More</a>
        </article>
          <article className="news-article">
            <h3>Article 3</h3>
            <p>Suspendisse potenti. Cras vehicula purus eu felis ultricies tempus.</p>
            <a className="button">Read More</a>
          </article>
          <article className="news-article">
            <h3>Article 4</h3>
            <p>Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus.</p>
            <a className="button">Read More</a>
          </article>
        </section>
      </main>
    </div>
  );
};

export default News;