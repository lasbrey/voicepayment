"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/components/config/authContext";

const Signup = () => {
  const [transcript, setTranscript] = useState("");
  const startSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition(); // Initialize speech recognition
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
    };
    recognition.start(); // Start speech recognition
  };
  const router = useRouter();
  const { emailSignUp, user } = UserAuth();
  const [error, setError] = useState(null);

  const [data, setData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    try {
      await emailSignUp(data.email, data.password, data.firstName);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {/* <!-- ===== SignUp Form Start ===== --> */}
      <section className="pt-32.5 lg:pt-45 xl:pt-50 pb-12.5 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1016 relative z-1 pt-10 lg:pt-15 xl:pt-20 pb-7.5 px-7.5 lg:px-15 xl:px-20">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#F8F9FF] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
          <div className="absolute -z-1 bottom-17.5 left-0 w-full h-1/3">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark pt-7.5 xl:pt-15 px-7.5 xl:px-15"
          >
            <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15 text-center">
              Create an Account
            </h2>

            <div className="flex items-center gap-8">
              <p className="justify-center items-center">{transcript}</p>
              <button
                onClick={startSpeechRecognition}
                aria-label="signup with google"
                className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] py-3 px-6 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
              >
                <span className="mr-3">
                  <svg
                    fill="#000000"
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 28 28"
                  >
                    <g>
                      <path d="M14,0C6.28,0,0,6.28,0,14s6.28,14,14,14c7.721,0,14-6.28,14-14S21.721,0,14,0z M14,27.062    C6.797,27.062,0.938,21.203,0.938,14S6.797,0.938,14,0.938S27.062,6.797,27.062,14S21.203,27.062,14,27.062z" />
                      <path d="M14,2.706C7.771,2.706,2.706,7.771,2.706,14c0,6.229,5.065,11.294,11.294,11.294c6.229,0,11.294-5.065,11.294-11.294    C25.294,7.771,20.229,2.706,14,2.706z M14,24.355c-1.901,0-3.679-0.524-5.212-1.424h7.001c0,0-1.209-0.592-1.346-1.097    c-0.407-1.498,0.332-3.211,1.211-3.047c1.143,0.212,3.371,1.917,3.607-0.172c0.139-1.22,0.524-0.907,0.635-1.169    c0.164-0.389-1.551-0.736-1.723-0.84c0.139-0.047,2.051-0.473,2.064-0.825c0.171-0.259-0.573-0.673-0.493-0.996    c0.157-0.64,0.896-0.427,1.198-0.824c0.4-0.534-0.309-0.994-0.659-1.311c-0.526-0.472-1.242-0.947-1.046-1.958    c0.125-0.71-0.094-1.537,0.119-1.812c0.211-0.277,0.572-1.974-0.506-3.267c-1.416-1.7-1.022,1.182-2.791,0.321    c-2.276-1.107-6.046-1.2-8.237,1.393c-1.384,1.639-0.931,5.716-0.107,7.945c0.296,0.8,1.077,1.168,1.141,2.244    c0.352,2.422-0.373,4.168-0.799,4.95C5.393,20.593,3.645,17.499,3.645,14C3.645,8.29,8.29,3.645,14,3.645S24.355,8.29,24.355,14    S19.71,24.355,14,24.355z" />
                      <path d="M6.491,12.563c-0.112-0.836-0.158-1.698-0.105-2.521c-0.618,1.185-0.973,2.53-0.973,3.957c0,2.502,1.082,4.75,2.794,6.321    c0.074-0.357,0.12-0.756,0.141-1.186c-1.236-1.359-1.998-3.158-1.998-5.136C6.35,13.508,6.401,13.029,6.491,12.563z" />
                      <path d="M20.154,8.023c-0.033,0.473-0.143,0.856-0.275,1.09c1.004,1.206,1.639,2.725,1.746,4.386    c0.01,0.073,0.018,0.146,0.01,0.222c0.004,0.093,0.016,0.185,0.016,0.279c0,1.915-0.713,3.664-1.881,5.007    c-0.236,0.984-0.93,1.183-1.328,1.209c-1,0.716-2.176,1.196-3.457,1.362c0.009,0.036,0.007,0.07,0.017,0.105    c0.063,0.127,0.505,0.445,0.938,0.674c3.804-0.883,6.648-4.291,6.648-8.358C22.587,11.677,21.657,9.57,20.154,8.023z" />
                    </g>
                  </svg>
                </span>
                Register Voice
              </button>
            </div>

            <div className="mb-10 flex items-center justify-center">
              <span className="hidden h-[1px] w-full max-w-[200px] bg-stroke dark:bg-stroke-dark sm:block"></span>
              <p className="w-full px-5 text-center text-base text-body-color dark:text-body-color-dark">
                Or, register with your email
              </p>
              <span className="hidden h-[1px] w-full max-w-[200px] bg-stroke dark:bg-stroke-dark sm:block"></span>
            </div>

            <form onSubmit={handleEmailSignUp}>
              <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5 lg:mb-12.5">
                <input
                  name="firstName"
                  type="text"
                  placeholder="Name"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="p-2 w-full lg:w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                />
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5 lg:mb-12.5">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                />
              </div>

              <div className="flex flex-wrap md:justify-between gap-10 xl:gap-15">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="max-w-[425px] flex cursor-pointer select-none  pl-3"
                  >
                    Keep me signed in
                  </label>
                </div>

                <button
                  aria-label="signup with email and password"
                  className="inline-flex items-center gap-2.5 bg-black dark:bg-btndark hover:bg-blackho ease-in-out duration-300 font-medium text-white rounded-full px-6 py-3"
                >
                  Create Account
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>

              <div className="text-center border-t border-stroke dark:border-strokedark mt-12.5 py-5">
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-black dark:text-white hover:text-primary dark:hover:text-primary"
                    href="/auth/signin"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== SignUp Form End ===== --> */}
    </>
  );
};

export default Signup;
