// https://dial.to/devnet?action=solana-action:http://localhost:3000/api/actions/donate

import {
  ActionGetResponse,
  ACTIONS_CORS_HEADERS,
  ActionPostRequest,
  createPostResponse,
  ActionPostResponse,
} from "@solana/actions";
import {
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  Connection,
  clusterApiUrl,
} from "@solana/web3.js";

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    icon: new URL("/alston.jpeg", new URL(req.url).origin).toString(),
    title: "Alston Soares - Buy me a coffee",
    label: "Buy me a coffee",
    description:
      "If you like my work, consider supporting me by buying me a coffee.",
    links: {
      actions: [
        {
          href: "/api/actions/donate?amount=0.1",
          label: "0.1 SOL",
        },
        {
          href: "/api/actions/donate?amount=0.5",
          label: "0.5 SOL",
        },
        {
          href: "/api/actions/donate?amount=1.0",
          label: "1.0 SOL",
        },
        {
          href: "/api/actions/donate?amount={amount}",
          label: "Send SOL",
          parameters: [
            {
              name: "amount",
              label: "Enter a SOL amount",
            },
          ],
        },
      ],
    },
  };
  return new Response(JSON.stringify(payload), {
    headers: ACTIONS_CORS_HEADERS,
  });
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const body: ActionPostRequest = await req.json();
    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      throw "Invalid account";
    }

    let amount: number = 0.1;
    if (url.searchParams.has("amount")) {
      try {
        amount = parseFloat(url.searchParams.get("amount") || "0.1") || amount;
      } catch (err) {
        throw "Invalid 'amount' input";
      }
    }

    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const TO_PUBKEY = new PublicKey(
      `${process.env.NEXT_PUBLIC_SOLANA_PUBLIC_KEY}`
    );
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        lamports: amount * LAMPORTS_PER_SOL,
        toPubkey: TO_PUBKEY,
      })
    );
    transaction.feePayer = account;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Thank you for the coffee!",
      },
    });
    return new Response(JSON.stringify(payload), {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (error) {
    let message = "An error occurred";
    if (typeof error === "string") {
      message = error;
    }
    return new Response(JSON.stringify(message), {
      headers: ACTIONS_CORS_HEADERS,
    });
  }
};
