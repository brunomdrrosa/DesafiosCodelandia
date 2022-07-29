import './styles.scss';
import { FaRegHeart } from 'react-icons/fa';

interface NewsProps {
  date: string;
  title: string;
  description: string;
}

function News(props: NewsProps) {
  return (
    <div className="background">
      <main className="news-box">
        <div className="row-date-heart">
          <h3 className="news-text date">{props.date}</h3>
          <FaRegHeart color="#574AE8" size={25} />
        </div>
        <h4 className="news-text news-title">{props.title}</h4>
        <p className="news-text description">{props.description}</p>
      </main>
    </div>
  );
}

export default News;
