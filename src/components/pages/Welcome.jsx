import { Link } from "react-router-dom"

export default function Welcome() {
  return (
    <html>
      <main class="bg-cover bg-gradient-to-r from-cyan-500 to-blue-500">
        <head>
          <title>Welcome to CheckMate</title>
        </head>
        <body>
          <div>
            <h1 className="text-white text-center tracking-tight text-5xl self-center font-semibold dark:text-white pt-40">
              We're not your average check list.
            </h1>
            <br></br>
            <h2 className="text-white tracking-tight leading-6 text-2xl pb-20 px-80">
              Complete your goals with family members, roommates, colleagues,
              and more.
            </h2>
            <br></br>
            <h3 className="text-white tracking-tight text-4xl self-center font-semibold dark:text-white white-space: nowrap p-2">
              Ready to join?{" "}
              <Link
                className="hover:bg-white hover:text-blue-600 text-2xl text-white p-0 dark:text-white display: inline-block  rounded-full p-2.5 bg-blue-600 shadow-lg shadow-indigo-500/40"
                to="/register"
              >
                {" "}
                Get Started
              </Link>
            </h3>
            <br></br>
            <h3 className="text-white tracking-tight text-4xl self-center font-semibold dark:text-white p-8 pt-20 flex justify-start">
              Invite your crew.
            </h3>
            <p className="text-white tracking-tight leading-6 text-2xl pb-8 h-48 px-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br></br>
            <h3 className="text-white tracking-tight text-4xl self-center font-semibold dark:text-white p-8 flex justify-end">
              Log your tasks.
            </h3>
            <p className="text-white tracking-tight leading-6 text-2xl pb-8 h-48 px-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br></br>
            <h3 className="text-white tracking-tight text-4xl self-center font-semibold dark:text-white p-8 flex justify-start">
              Complete your list.
            </h3>
            <p className="text-white tracking-tight leading-6 text-2xl pb-8 h-48 px-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br></br>
            <h3 className="text-white tracking-tight text-4xl self-center font-semibold dark:text-white p-8 flex justify-end">
              Bask in the glory.
            </h3>
          </div>
        </body>
      </main>
    </html>
  )
}
