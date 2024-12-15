import VideoPlayer from "@/components/VideoPlayer";

export default function Videos() {
    // 这里可以从API或数据库获取视频列表
    const videos = [
      {
        id: 1,
        title: "视频标题1",
        src: "/videos/video1.mp4",
      },
      // 更多视频...
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">视频列表</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map(video => (
            <VideoPlayer key={video.id} {...video} />
          ))}
        </div>
      </div>
    );
  }