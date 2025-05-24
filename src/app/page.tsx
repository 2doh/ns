import SocialAuth from "./SocialAuth";

export default function Home() {
  return (
    <>
      <h2
        className="text-2xl font-bold text-center"
        style={{ color: "#2a1b07" }}
      >
        로그인
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1" style={{ color: "#2a1b07" }}>
            이메일
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              borderColor: "#e6e5e6",
              color: "#2a1b07",
            }}
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1" style={{ color: "#2a1b07" }}>
            비밀번호
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{
              borderColor: "#e6e5e6",
              color: "#2a1b07",
            }}
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg text-white font-semibold"
          style={{
            backgroundColor: "#7b5dc7",
          }}
        >
          로그인
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">
        또는 소셜 계정으로 로그인
      </div>
      <SocialAuth />
    </>
  );
}
