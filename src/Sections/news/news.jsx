export function News() {
  return (
    <section className="news-sec">
      <div className="container">
        <div className="row gy-5 gy-lg-0">
          <h1 className="title text-center mb-4">NEWS</h1>
          <div className="col-lg-6">
            <div className="news-group">
              <img src="/assets/images/news-1.webp"></img>
              <p className="news-subtitle">CLASH OF CLANS</p>
              <a href="#">Super Dragon Spotlight Event </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="news-group">
              <img  src="/assets/images/news-2.webp"></img>
              <p className="news-subtitle">CLASH OF CLANS</p>
              <a href="#">February 2024 Update - Patch Notes</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
