import Header from '../components/Header/Header';
import News from '../components/News/News';
import news from '../../news.js';

function boxNews(news: any) {
  return (
    <News
      key={news.id}
      date={news.date}
      title={news.title}
      description={news.description}
    />
  );
}

function Blog() {
  return (
    <>
      <Header />
      {news.map(boxNews).reverse()}
    </>
  );
}

export default Blog;
