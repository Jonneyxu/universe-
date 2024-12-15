// components/ArticleCard.tsx
import Image from 'next/image';


const ArticleCard = ({ 
  title = "默认标题", 
  image = "", 
  summary = "默认摘要内容..."
}) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{summary}</p>
      </div>
    </article>
  );
};

export default ArticleCard;