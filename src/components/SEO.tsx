import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import defaultLogo from '@/assets/logo.png';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = 'IVF, fertility, Azerbaijan, clinic, reproductive medicine',
  image = defaultLogo,
  url = window.location.href
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  
  const siteTitle = title 
    ? `${title} | Genesis Clinic` 
    : 'Genesis Clinic - Azerbaijan\'s First IVF Clinic';
  
  const siteDescription = description || t('home.description');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="language" content={i18n.language} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={i18n.language === 'az' ? 'az_AZ' : 'en_US'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Genesis Clinic" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="az" href={url.replace(/\/(en|az)/, '/az')} />
      <link rel="alternate" hrefLang="en" href={url.replace(/\/(en|az)/, '/en')} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  );
};

export default SEO;

