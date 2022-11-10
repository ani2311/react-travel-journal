export default function Article(props) {
    const article = props.article
    return (
        <section className="article">
            <div className="picture">
                <img src={article.image} alt={article.image_alt} />
            </div>
            <div className="info">
                <div className="location">
                    <div className="spot-logo"></div>
                    <div className="country">{article.country}</div>
                    <div className="google-map">
                        <a target="_blank" href={article.google_map}>View on Google Maps</a>
                    </div>
                </div>
                <div className="location-name">{article.location}</div>
                <div className="date">
                    {article.start_date} - {article.end_date}
                </div>
                <div className="brief">{article.brief}</div>
                <div className="read-more">read more</div>
            </div>
        </section>
    )
}