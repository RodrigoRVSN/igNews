import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

import { signIn, signOut, useSession } from "next-auth/client";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX className={styles.signOutButton} color="#737380" />
    </button>
  ) : (
    <button className={styles.signInButton} onClick={() => signIn("github")}>
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
}
