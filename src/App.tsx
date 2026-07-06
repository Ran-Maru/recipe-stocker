import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section
        id="center"
        className="flex flex-col grow place-content-center place-items-center gap-[18px] px-5 pt-8 pb-6 lg:gap-[25px] lg:p-0"
      >
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="font-mono inline-flex items-center rounded-[5px] text-base text-accent bg-accent-bg border-2 border-transparent py-[5px] px-[10px] mb-6 transition-colors duration-300 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div
        className="relative w-full
          before:content-[''] before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-border
          after:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-border"
      ></div>

      <section
        id="next-steps"
        className="flex flex-col text-center border-t border-border lg:flex-row lg:text-left"
      >
        <div
          id="docs"
          className="flex-1 py-6 px-5 border-b border-border lg:p-8 lg:border-b-0 lg:border-r"
        >
          <svg className="icon mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 flex-wrap justify-center mt-5 lg:flex-nowrap lg:justify-start lg:mt-8">
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="w-full box-border justify-center lg:w-auto flex items-center gap-2 text-text-h text-base rounded-md bg-social-bg py-1.5 px-3 no-underline transition-shadow duration-300 hover:shadow-card"
              >
                <img className="logo h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://react.dev/"
                target="_blank"
                className="w-full box-border justify-center lg:w-auto flex items-center gap-2 text-text-h text-base rounded-md bg-social-bg py-1.5 px-3 no-underline transition-shadow duration-300 hover:shadow-card"
              >
                <img className="button-icon h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="flex-1 py-6 px-5 lg:p-8">
          <svg className="icon mb-4 w-[22px] h-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 flex-wrap justify-center mt-5 lg:flex-nowrap lg:justify-start lg:mt-8">
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="w-full box-border justify-center lg:w-auto flex items-center gap-2 text-text-h text-base rounded-md bg-social-bg py-1.5 px-3 no-underline transition-shadow duration-300 hover:shadow-card"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="w-full box-border justify-center lg:w-auto flex items-center gap-2 text-text-h text-base rounded-md bg-social-bg py-1.5 px-3 no-underline transition-shadow duration-300 hover:shadow-card"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="w-full box-border justify-center lg:w-auto flex items-center gap-2 text-text-h text-base rounded-md bg-social-bg py-1.5 px-3 no-underline transition-shadow duration-300 hover:shadow-card"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="w-full box-border justify-center lg:w-auto flex items-center gap-2 text-text-h text-base rounded-md bg-social-bg py-1.5 px-3 no-underline transition-shadow duration-300 hover:shadow-card"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div
        className="relative w-full
          before:content-[''] before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-border
          after:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-border"
      ></div>
      <section id="spacer" className="h-12 border-t border-border lg:h-[88px]"></section>
    </>
  );
}

export default App;
