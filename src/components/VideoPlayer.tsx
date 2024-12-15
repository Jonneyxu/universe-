interface VideoPlayerProps {
  src: string;
  title: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="video-container fade-in">
      <video controls preload="metadata">
        <source src={src} type="video/mp4" />
        您的浏览器不支持视频播放
      </video>
      <h3 className="p-4 text-xl font-semibold">{title}</h3>
    </div>
  );
}
