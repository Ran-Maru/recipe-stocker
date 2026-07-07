import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section
        id="center"
        className="flex grow flex-col place-content-center place-items-center gap-[18px] px-5 pt-8 pb-6 lg:gap-[25px] lg:p-0"
      >
        <div className="relative">
          <img
            src={heroImg}
            className="relative inset-x-0 z-0 mx-auto w-[170px]"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className={`absolute inset-x-0 top-[34px] z-[1] mx-auto h-[28px] ${styles.framework}`}
            alt="React logo"
          />
          <img
            src={viteLogo}
            className={`absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto ${styles.vite}`}
            alt="Vite logo"
          />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="text-accent bg-accent-bg hover:border-accent-border focus-visible:outline-accent mb-6 inline-flex items-center rounded-[5px] border-2 border-transparent px-[10px] py-[5px] font-mono text-base transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="before:border-l-border after:border-r-border relative w-full before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:content-['']"></div>

      <section
        id="next-steps"
        className="border-border flex flex-col border-t text-center lg:flex-row lg:text-left"
      >
        <div
          id="docs"
          className="border-border flex-1 border-b px-5 py-6 lg:border-r lg:border-b-0 lg:p-8"
        >
          <svg className="icon mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8 lg:flex-nowrap lg:justify-start">
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card box-border flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 lg:w-auto"
              >
                <img className="logo h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card box-border flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 lg:w-auto"
              >
                <img className="button-icon h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="flex-1 px-5 py-6 lg:p-8">
          <svg className="icon mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8 lg:flex-nowrap lg:justify-start">
            <li className="flex-1 basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="text-text-h bg-social-bg hover:shadow-card box-border flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 lg:w-auto"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:brightness-200 dark:invert"
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
                className="text-text-h bg-social-bg hover:shadow-card box-border flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 lg:w-auto"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:brightness-200 dark:invert"
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
                className="text-text-h bg-social-bg hover:shadow-card box-border flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 lg:w-auto"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:brightness-200 dark:invert"
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
                className="text-text-h bg-social-bg hover:shadow-card box-border flex w-full items-center justify-center gap-2 rounded-md px-3 py-1.5 text-base no-underline transition-shadow duration-300 lg:w-auto"
              >
                <svg
                  className="button-icon h-[18px] w-[18px] dark:brightness-200 dark:invert"
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

      <div className="before:border-l-border after:border-r-border relative w-full before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:content-['']"></div>
      <section id="spacer" className="border-border h-12 border-t lg:h-[88px]"></section>
    </>
  );
}

export default App;
