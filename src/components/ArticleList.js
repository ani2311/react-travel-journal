import Article from './Article.js'
import articles from '../articles.js'

export default function ArticleList() {
    return (
        <section className="articles">
            {articles.map((article) => 
                <Article article={article}/>
            )}
        </section>
    )
}