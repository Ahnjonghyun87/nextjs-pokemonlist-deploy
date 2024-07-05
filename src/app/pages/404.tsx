import Image from "next/image";

interface ErrorPageProps {
  statusCode?: number;
}

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        {statusCode ? `Error ${statusCode}` : "An error occurred on client"}
      </h1>
      <p className="text-xl mb-4">무언가 잘못되었습니다.</p>
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
};

export default ErrorPage;
