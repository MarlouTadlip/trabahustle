import { NavLink } from 'react-router-dom';
import { ImageUp, Info, CircleCheck } from 'lucide-react'; 

function SignUp1() {
  return (
    <>
      <div>
        <h1 className="pl-7 pt-7">1/5 <b className="ml-3">Freelancer Registration</b></h1>
      </div>
      <div className="flex h-5/6">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <img src="src/assets/signup2.svg" alt="Sign Up" className="scale-100" />
          <button className="flex items-center bg-[#418B71] text-white rounded-md px-4 py-2 mt-4 mb-2">
            <ImageUp size={20} className="mr-2" /> Upload Photo
          </button>
          <p className="w-96 flex">
            <Info size={40} className="mr-2" />
            Upload a clear, recent photo of yourself for your profile. This helps build trust and recognition.
          </p>
        </div>
        
        <div className="border-l border-gray-300 h-5/6"></div>

        <div className="w-1/2 flex flex-col bg-white p-8">
          <h1 className="text-4xl font-bold mb-4">YOUR BASIC INFORMATION</h1>
          <p className="text-gray-600 mb-2">Fill in your details to create your account securely.</p>

          <div className="flex justify-center space-x-20">
            <div className="flex flex-col items-center">
              <button className="flex items-center px-20 py-3 mt-5 mb-2 border-solid border-2 border-[#418B71] rounded-md">
                <CircleCheck size={20} className="mr-2" /> Continue with Apple
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="flex items-center px-20 py-3 mt-5 mb-2 border-solid border-2 border-[#EF8F00] rounded-md">
                <CircleCheck size={20} className="mr-2" /> Continue with Google
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center mb-6">
            <hr className="flex-grow border-t-2 border-gray-300" />
            <span className="mx-4 text-gray-600">or</span>
            <hr className="flex-grow border-t-2 border-gray-300" />
          </div>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Last Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Address" required />
                    </div>  
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street/Village</label>
                        <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Street/Village" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                        <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Country" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Timezone</label>
                        <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Timezone" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="password" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Confirm Password" required />
                    </div>
                </div>
            </form> 
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send me helpful emails to find rewarding work and job leads.</label>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I understand and agree to the Terms of Service, including the User Agreement and Privacy Policy.</label>
            </div>
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full dark:bg-blue-500" style={{width: '20%'}}></div>
    </div>
    <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup" className="bg-gray-300 text-black rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-2" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed:Skills
            </NavLink>
    </div>
    </>
  );
};

export default SignUp1;