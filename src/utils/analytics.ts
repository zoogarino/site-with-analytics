export const GA_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 Measurement ID

export const trackEvent = (eventName: string, params: Record<string, string | number> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

export const trackNewsletterSignup = (location: string) => {
  trackEvent('newsletter_signup', { location });
};

export const trackBlogRead = (title: string, percentage: number) => {
  trackEvent('blog_read', { title, percentage });
};

export const trackTripView = (tripName: string) => {
  trackEvent('trip_viewed', { trip_name: tripName });
};

export const trackTripCopy = (tripName: string) => {
  trackEvent('trip_copied', { trip_name: tripName });
};

export const trackBookingInquiry = (vehicleType: string) => {
  trackEvent('booking_inquiry', { vehicle_type: vehicleType });
};

export const trackSocialShare = (platform: string, title: string) => {
  trackEvent('social_share', { platform, content: title });
};

export const trackExternalLink = (url: string, label: string) => {
  trackEvent('external_link', { url, label });
};

export const trackAppDownload = (source: string) => {
  trackEvent('app_download_click', { source });
};
