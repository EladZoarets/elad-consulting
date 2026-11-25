import { Fragment } from "react";
import type { Locale } from "@/lib/i18n";

// A Latin phrase, including internal spaces and punctuation, but not the space after it.
const LATIN_RUN =
  /([A-Za-z0-9@][A-Za-z0-9@+'’&/:.\-]*(?:[ ]+[&+]*[ ]*[A-Za-z0-9@][A-Za-z0-9@+'’&/:.\-]*)*)/g;

export default function MixedText({ text }: { text: string }) {
  const parts = text.split(LATIN_RUN);
  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;
        if (index % 2 === 1) {
          return (
            <Fragment key={index}>
              <span dir="ltr" className="inline-block max-w-full text-left align-bottom">
                {part}
              </span>
              {"\u200F"}
            </Fragment>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

export function LocaleText({ locale, text }: { locale: Locale; text: string }) {
  if (locale !== "he") return <>{text}</>;
  return <MixedText text={text} />;
}
