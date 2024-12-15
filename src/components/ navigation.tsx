import Link from "next/link";

export default function Navigation() {
    return (
      <nav className="p-4 bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between">
          <Link href="/">首页</Link>
          <div className="space-x-4">
            <Link href="/articles">文章</Link>
            <Link href="/videos">视频</Link>
          </div>
        </div>
      </nav>
    );
  }