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
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            html: {
              height: "100%",
              fontFamily: fixel.style.fontFamily,
            },
            body: {
              height: "100%",
              color: theme.colors.text.primary,

              "&>div#__next": {
                height: "100%",
              },
            },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
