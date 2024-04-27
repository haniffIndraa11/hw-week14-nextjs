import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 h-80 gap-2 my-2 relative">
      <div className="p-10 bg-color-accent w-96 rounded shadow-xl">
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
        
        <div className="flex justify-between">
          <button className=" p-2 bg-color-primary hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
            Login
          </button>
          <Link href="/register"><button className=" p-2 bg-color-primary hover:bg-color-secondary hover:text-color-primary my-2 transition-all">
            Create New Account
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
