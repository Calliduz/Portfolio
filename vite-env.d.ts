/// <reference types="vite/client" />

/**
 * @fileoverview Vite Environment Variables Type Definitions
 * @description Type declarations for custom environment variables used in the portfolio
 */

interface ImportMetaEnv {
  /** Web3Forms API key for contact form submissions */
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
