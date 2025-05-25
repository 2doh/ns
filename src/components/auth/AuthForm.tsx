import FormBtn from "../common/FormBtn";

const AuthForm = () => {
  return (
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
        />
      </div>

      <FormBtn />
    </form>
  );
};

export default AuthForm;
