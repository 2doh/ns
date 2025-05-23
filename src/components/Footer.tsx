export default function Footer() {
  const email = "ldh0973@naver.com";
  const githubUrl = "https://github.com/2doh";
  const portfolioUrl = "https://portfolio-nine-rho-75.vercel.app/";

  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <h3 className="font-semibold mb-1">이메일</h3>
          <a
            href={`mailto:${email}`}
            className=" hover:text-gray-200 text-sm text-gray-400"
            aria-label={`Send email to ${email}`}
          >
            {email}
          </a>
        </div>
        <div>
          <h3 className="font-semibold mb-1">깃허브</h3>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-200 text-sm text-gray-400"
            aria-label="Visit GitHub profile"
          >
            깃허브 바로가기
          </a>
        </div>
        <div>
          <h3 className="font-semibold mb-1">포트폴리오</h3>
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-200 text-sm text-gray-400"
            aria-label="Visit Portfolio site"
          >
            포트폴리오 바로가기
          </a>
        </div>
      </div>
    </footer>
  );
}
