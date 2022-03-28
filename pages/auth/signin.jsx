import { getProviders, signIn as SignIntoProvider} from "next-auth/react"
import Header from "../../components/Header";

export default function signin({providers}) {
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-80 mb-2" src="https://links.papareact.com/ocw" alt="" />
        <p>Instagram clone made with HTML, CSS, JavaScript, Tailwind, React, Next, Recoil and Firebase by <a className="text-blue-500 hover:text-blue-700" href="https://www.linkedin.com/in/daniel-reyes-developer/" target="_blank" rel="noreferrer">Daniel Reyes</a> </p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className="bg-blue-500 p-3 rounded-md text-white" onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
