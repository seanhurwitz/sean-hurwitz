import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'do8o483d',
  dataset: 'production',
  useCdn: true,
});
