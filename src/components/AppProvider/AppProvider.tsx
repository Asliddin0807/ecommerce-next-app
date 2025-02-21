"use client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import NextTopLoader from "nextjs-toploader";
import { ColorModeProvider } from "@/components/ui/color-mode";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          height={4}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          showAtBottom={false}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
