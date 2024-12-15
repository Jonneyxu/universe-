import ArticleCard from "@/components/ArticleCard";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 标题部分 */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-primary mb-4">Universe</h1>
        <div className="w-24 h-1 mx-auto bg-accent"></div>
      </header>

      {/* 内容容器 */}
      <div className="max-w-3xl mx-auto"> {/* 使用较窄的容器 */}
        {/* 精选文章部分 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">精选文章</h2>
          <div className="flex justify-center"> {/* 使用 flex 居中 */}
            <ArticleCard 
              title="测试文章"
              image="/placeholder.jpg"
              summary="这是一篇测试文章的摘要内容"
            />
          </div>
        </section>

        {/* 视频部分 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">视频集锦</h2>
          <div className="flex justify-center"> {/* 使用 flex 居中 */}
            <VideoPlayer 
              src="/test-video.mp4"
              title="测试视频"
            />
          </div>
        </section>
      </div>
    </main>
  );
}