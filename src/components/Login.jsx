export const Login = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form action="">
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center" htmlFor="">
            <input className="form-checkbox" type="checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-blue-700">
            Forgot Password
          </a>
        </div>
        <div className="mb-4">
          <button className="w-full bg-blue-600 text-white py-2">Login</button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Dont have an Account?</span>
        <button className="text-blue-700" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
