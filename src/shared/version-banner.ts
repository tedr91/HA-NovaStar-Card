import { VERSION } from "./const";

/** Print a styled banner to the browser console identifying this package. */
export function printVersionBanner(): void {
  // eslint-disable-next-line no-console
  console.info(
    `%c NOVASTAR-CARD %c ${VERSION} `,
    "color: white; background: #4cc2ff; font-weight: 700;",
    "color: #4cc2ff; background: white; font-weight: 700;"
  );
}
