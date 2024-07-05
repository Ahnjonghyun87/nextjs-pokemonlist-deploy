"use client";

import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-xl mb-4">404 error!!</p>
      <Image
        src="/images/pixel_art_pikachu.png"
        alt="Error Image"
        width={256}
        height={256}
        className="mb-4"
      />
      <a href="/" className="text-blue-500 hover:underline">
        홈페이지로 돌아가기
      </a>
    </div>
  );
}
