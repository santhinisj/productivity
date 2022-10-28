import { useContext } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { UserContext } from "../contexts/UserContext";
import PageHeading from "../components/PageHeading";
import LoginForm from "../components/login-page/LoginForm";
import Button from "../components/Button";

const Login: NextPage = () => {
  const { username } = useContext(UserContext);
  const router = useRouter();
  return (
    <div className="grow flex flex-col items-center mt-20 bg-orange-50 text-humber-dark-blue">
      {username ? (
        <>
          <p>
            You are logged in as{" "}
            <span className="text-green-600 font-semibold">{username}</span> 👋
          </p>
          {/* <div>
            <Button
              color="success"
              type="submit"
              handleClick={() => router.push("/")}
              extraClasses="w-full mt-3 py-3 font-semibold"
            >
              Timer
            </Button>
          </div> */}
        </>
      ) : (
        <>
          <PageHeading extraClasses="text-center mb-8">Log in</PageHeading>
          <LoginForm />
        </>
      )}
    </div>
  );
};

export default Login;
