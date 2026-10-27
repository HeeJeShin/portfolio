import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 이름으로 검색했을 때 포트폴리오가 나오지 않도록 모든 페이지·PDF에 noindex.
  // 검색 로봇이 이 헤더를 볼 수 있어야 하므로 robots.txt에서 막지 않는다 (public/robots.txt 참고)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
