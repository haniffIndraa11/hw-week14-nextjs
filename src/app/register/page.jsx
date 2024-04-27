const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-44 h-80 gap-2 my-2 relative">
      <div className="p-10 bg-color-accent w-96 rounded shadow-xl">
        <p className="p-2 my-2">Name</p>
        <input
          placeholder="Enter your Name"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <p className="p-2 my-2">Email</p>
        <input
          placeholder="Enter your Email"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <p className="p-2 my-2">Password</p>
        <input
          placeholder="Enter your password"
          type="password"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <p className="p-2 my-2">Re-Enter Your Password</p>
        <input
          placeholder="Enter your password"
          type="password"
          className="p-2 bg-color-primary w-full rounded"
        ></input>
        <br />
        <button className="p-2 bg-color-primary hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
