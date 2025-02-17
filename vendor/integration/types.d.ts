declare module 'astrowind:config' {
  import type {
    SiteConfig,
    I18NConfig,
    MetaDataConfig,
    AppBlogConfig,
    UIConfig,
    AnalyticsConfig,
    DashboardConfig,
    ChatWidgetConfig,
  } from './config';

  export const SITE: SiteConfig;
  export const I18N: I18NConfig;
  export const METADATA: MetaDataConfig;
  export const APP_BLOG: AppBlogConfig;
  export const UI: UIConfig;
  export const ANALYTICS: AnalyticsConfig;
  export const DASHBOARD: DashboardConfig;
  export const CHAT_WIDGET: ChatWidgetConfig;
}
