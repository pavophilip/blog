import "normalize.css";
import localFont from "@next/font/local";
import { Global, ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    text: {
      primary: "#232323",
      gray: "#4f4f4f",
    },
  },
};

const fixel = localFont({
  src: "../../public/fonts/MacPawFixel/MacPawFixel/MacPawFixel-VF.ttf",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fixel.style.fontFamily};
        }
      `}</style>

      <ThemeProvider theme={theme}>
        <Global
          styles={{
            html: {
              fontFamily: fixel.style.fontFamily,
            },
            body: {
              color: theme.colors.text.primary,
            },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
