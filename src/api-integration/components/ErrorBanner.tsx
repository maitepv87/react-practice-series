interface ErrorBannerProps {
  message: string;
}

export const ErrorBanner = ({ message }: ErrorBannerProps) => {
  return (
    <div role="alert">
      <p>Error: {message}</p>
    </div>
  );
};
