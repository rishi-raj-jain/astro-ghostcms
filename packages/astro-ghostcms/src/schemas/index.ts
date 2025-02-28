import { z } from 'astro/zod';
import { SitemapSchema } from './sitemap';
import { RobotsTxtSchema } from './robots';

export const UserConfigSchema = z.object({
  /** OPTIONAL - Either set the URL in your .env or put it here
   * @example
   * // https://astro.build/config
   * export default defineConfig({
   *     site: "https://demo.astro-ghostcms.xyz/",
   *     integrations: [ghostcms({
   *         ghostURL: "https://ghostdemo.matthiesen.xyz"
   *     })],
   * }); */
  ghostURL: z.string().optional(),
  /** OPTIONAL - Disable Route Injector
   * This option allows the user to disable the route injection system and utilize just the integraions other functions. Such as API, sitemap and robotstxt integrations. */
  disableRouteInjection: z.boolean().default(false),
  /** OPTIONAL - Allows the user to disable "info" console output */
  disableConsoleOutput: z.boolean().default(false),
  /** OPTIONAL - Theme Selector
   * This option allows the user to replace the included theme with an external npm module */
  theme: z.string().default('@matthiesenxyz/astro-ghostcms-theme-default'),
  /** OPTIONAL - astrojs/sitemap
   * This option allows the user to configure the included integration 
   * Options shown are the availble options 
   * REFERENCE https://docs.astro.build/en/guides/integrations-guide/sitemap
    */
  sitemap: SitemapSchema.optional(),
  /** OPTIONAL - astro-robots-txt 
   * This option allows the user to configure the included integration 
   * Options shown are the availble options
   * REFERENCE https://www.npmjs.com/package/astro-robots-txt#configuration
    */
  robotstxt: RobotsTxtSchema.optional(),
});

/** USER CONFIGURATION SCHEMA */
export type UserConfig = z.infer<typeof UserConfigSchema>
export type GhostUserConfig = z.infer<typeof UserConfigSchema>