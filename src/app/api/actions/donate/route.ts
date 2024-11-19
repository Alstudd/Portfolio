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
  try {
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
      headers: {
        "Content-Type": "application/json",
        ...ACTIONS_CORS_HEADERS,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "GET request failed" }), {
      headers: {
        "Content-Type": "application/json",
        ...ACTIONS_CORS_HEADERS,
      },
    });
  }
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);
    const body: ActionPostRequest = await req.json();
    const account = new PublicKey(body.account);
    const amount = parseFloat(url.searchParams.get("amount") || "0.1") || 0.1;

    const connection = new Connection(clusterApiUrl("devnet"));
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
      headers: {
        "Content-Type": "application/json",
        ...ACTIONS_CORS_HEADERS,
      },
    });
  } catch (error) {
    const message = typeof error === "string" ? error : "An error occurred";
    return new Response(JSON.stringify({ error: message }), {
      headers: {
        "Content-Type": "application/json",
        ...ACTIONS_CORS_HEADERS,
      },
    });
  }
};
