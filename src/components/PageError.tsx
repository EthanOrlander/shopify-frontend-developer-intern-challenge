import {Banner, BannerStatus} from '@shopify/polaris';

interface ErrorBannerProps {
  title: string;
  description: string | undefined | null;
  status: BannerStatus;
}

export function ErrorBanner({title, description, status}: ErrorBannerProps) {
  return (
    <Banner title={title} status={status}>
      <p>{description}</p>
    </Banner>
  );
}
