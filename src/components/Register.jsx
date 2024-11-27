export const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form action="">
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
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

        <div className="mb-4">
          <button className="w-full bg-blue-600 text-white py-2">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already an Account?</span>
        <button className="text-blue-700" onClick={openLogin}>
          Login Up
        </button>
      </div>
    </div>
  );
};
