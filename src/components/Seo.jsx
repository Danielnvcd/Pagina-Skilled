import { Head } from 'vite-react-ssg';

const SITE_URL = 'https://www.skilled.mx';
const SITE_NAME = 'Skilled Proyectos Industriales';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Meta tags por página (title, description, canonical, Open Graph y Twitter).
 * Usa <Head> de vite-react-ssg: se serializa en el HTML estático generado
 * durante el build (SSG), por lo que es visible para Google, redes sociales
 * y crawlers de IA aunque no ejecuten JavaScript.
 */
const Seo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Automatización Industrial y Soluciones Eléctricas`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={SITE_NAME} />
    </Head>
  );
};

export default Seo;
