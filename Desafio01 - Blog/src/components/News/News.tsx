import './styles.scss';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

export interface NewsProps {
  id?: number;
  date?: string;
  title?: string;
  description?: string;
}

function News(props: NewsProps) {
  const [icon, setIcon] = useState(true);

  return (
    <div className="background">
      <main className="news-box">
        <div className="row-date-heart">
          <h3 className="news-text date">{props.date}</h3>
          {icon ? (
            <FaRegHeart color="#574AE8" size={25} className="icon-heart" onClick={() => setIcon(!icon)} />
          ) : (
            <FaHeart color="#574AE8" size={25} className="icon-heart" onClick={() => setIcon(!icon)} />
          )}
        </div>
        <h4 className="news-text news-title">{props.title}</h4>
        <p className="news-text description">{props.description}</p>
      </main>
    </div>
  );
}

export default News;
