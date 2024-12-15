import ArticleCard from "@/components/ArticleCard";

export default function Articles() {
    // 这里可以从API或数据库获取文章列表
    const articles = [
      {
        id: 1,
        title: "文章标题1",
        image: "/images/article1.jpg",
        summary: "文章摘要..."
      },
      // 更多文章...
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">文章列表</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    );
  }
  