"use client";

import { defineChain, http } from "viem";
import { Outfit } from "next/font/google";
import "./globals.css";
import { PrivyProvider } from "@privy-io/react-auth";

const font = Outfit({ subsets: ["latin"] });
const RootstockTestnet = defineChain({
  id: 31,
  name: "Rootstock testnet",
  network: "Rootstock testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock testnet",
    symbol: "tRBTC"
  },
rpcUrls: {
  default: {
    http: [
      "public-node.testnet.rsk.co"
    ]
  }
} as any,
blockExplorers: {
  default: {
    name: "Rootstock explorer", 
    url: "explorer.testnet.rootstock.io"
  }
}
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="cm4hzerd309g512xn6pk2x9v1"
          config={{
            // Customize Privy's appearance in your app
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: RootstockTestnet,
            supportedChains: [RootstockTestnet]
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
