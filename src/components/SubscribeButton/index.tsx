import styles from "./styles.module.scss";
import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
    try {
      const response = await api.post<any>("/subscribe");
      const { sessionId } = response.data;
      const stripe = await getStripeJs();
      console.log("stripe");
      console.log(stripe);

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button
      className={styles.subscribeButton}
      onClick={() => handleSubscribe()}
    >
      Subscribe now
    </button>
  );
}
