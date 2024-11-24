import { Helmet } from 'react-helmet-async';
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: 'COMIC WORLD',
  description: 'We sell the best comic for cheap',
  keywords: 'comic, cartoon, manga, book',
};
export default Meta;