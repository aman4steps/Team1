import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function SEOTags() {
   const [seoData, setSeoData] = useState({});
   const [isSEOField, setIsSEOField] = useState({
       title: '',
       description: '',
       meta_title: '',
       meta_description: '',
       canonical_url: '',
       custom_url: ''
   });
   const [isSEOTwitterField, setIsSEOTwitterField] = useState({
       twitter_card: '',
       twitter_type: '',
       twitter_description: '',
       twitter_image: ''
   });
   const [isSEOOgField, setIsSEOOgField] = useState({
       og_type: '',
       og_url: '',
       og_site_name: '',
       og_locale: '',
       og_image: ''
   });
   const [validationErrors, setValidationErrors] = useState({});
   const [validationTwitterFieldErrors, setValidationTwitterFieldErrors] = useState({});
   const [validationOgErrors, setValidationOgErrors] = useState({});

   useEffect(() => {
       fetch('/api/package/package-seo/get-seo')
           .then(response => response.json())
           .then(data => {
               setSeoData(data);
               setIsSEOField({
                   title: data.title || '',
                   description: data.description || '',
                   meta_title: data.meta_title || '',
                   meta_description: data.meta_description || '',
                   canonical_url: data.canonical_url || '',
                   custom_url: data.custom_url || ''
               });
               setIsSEOTwitterField({
                   twitter_card: data.twitter_card || '',
                   twitter_type: data.twitter_type || '',
                   twitter_description: data.twitter_description || data.description || '',
                   twitter_image: data.twitter_image || ''
               });
               setIsSEOOgField({
                   og_type: data.og_type || '',
                   og_url: data.og_url || '',
                   og_site_name: data.og_site_name || '',
                   og_locale: data.og_locale || '',
                   og_image: data.og_image || ''
               });
           })
           .catch(error => console.error('Error fetching SEO data:', error));
   }, []);

   const handleMetaTag = e => {
       const { name, value } = e.target;
       setIsSEOField(prevState => ({ ...prevState, [name]: value }));
   };

   const handleTwitterField = e => {
       const { name, value } = e.target;
       setIsSEOTwitterField(prevState => ({ ...prevState, [name]: value }));
   };

   const handleOgField = e => {
       const { name, value } = e.target;
       setIsSEOOgField(prevState => ({ ...prevState, [name]: value }));
   };

   const handleSubmitSeoField = e => {
       e.preventDefault();
       const data = {
           ...isSEOField,
           twitter_description: isSEOTwitterField.twitter_description,
           description: isSEOField.description
       };
       fetch('/api/package/package-seo/add-seo', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => response.json())
           .then(data => {
               console.log('SEO data saved:', data);
           })
           .catch(error => console.error('Error saving SEO data:', error));
   };

   return (
       <>
           <Head>
               <title>{seoData.meta_title}</title>
               <meta name="description" content={seoData.meta_description} />
               <meta property="og:title" content={seoData.meta_title} />
               <meta property="og:type" content={seoData.og_type} />
               <meta property="og:description" content={seoData.meta_description} />
               <meta property="og:url" content={seoData.og_url} />
               <meta property="og:site_name" content={seoData.og_site_name} />
               <meta property="og:locale" content={seoData.og_locale} />
               <meta property="og:image" content={seoData.og_image} />
               <meta name="twitter:card" content={seoData.twitter_card} />
               <meta name="twitter:type" content={seoData.twitter_type} />
               <meta name="twitter:description" content={seoData.twitter_description} />
               <meta name="twitter:image" content={seoData.twitter_image} />
               <link rel="canonical" href={seoData.canonical_url} />
           </Head>
           <div className="p-4">
               <form className='border rounded p-3 bg-white' onSubmit={handleSubmitSeoField}>
                   {/* Title */}
                   <div className="flex flex-col mb-2">
                       <label className="text-para font-semibold" htmlFor="title">Title:</label>
                       <input
                           id="title"
                           name="title"
                           value={isSEOField.title}
                           onChange={handleMetaTag}
                           className="h-8 px-2 rounded border text-para "
                           type="text"
                       />
                       <span className="text-xs text-red-700">{validationErrors.title}</span>
                   </div>
                   {/* Description */}
                   <div className="flex flex-col mb-2">
                       <label className="text-para font-semibold" htmlFor="description">Description:</label>
                       <textarea
                           id="description"
                           name="description"
                           value={isSEOField.description}
                           onChange={handleMetaTag}
                           className="px-2 rounded border text-para "
                           rows={4}
                       />
                       <span className="text-xs text-red-700">{validationErrors.description}</span>
                   </div>
                   {/* Canonical URL */}
                   <div className="flex flex-col mb-2">
                       <label className="text-para font-semibold" htmlFor="canonical_url">Canonical URL:</label>
                       <input
                           id="canonical_url"
                           name="canonical_url"
                           value={isSEOField.canonical_url}
                           onChange={handleMetaTag}
                           className="h-8 px-2 rounded border text-para "
                           type="url"
                       />
                       <span className="text-xs text-red-700">{validationErrors.canonical_url}</span>
                   </div>
                   {/* Custom URL */}
                   <div className="flex flex-col mb-2">
                       <label className="text-para font-semibold" htmlFor="custom_url">Custom URL:</label>
                       <input
                           id="custom_url"
                           name="custom_url"
                           value={isSEOField.custom_url}
                           onChange={handleMetaTag}
                           className="h-8 px-2 rounded border text-para "
                           type="url"
                       />
                       <span className="text-xs text-red-700">{validationErrors.custom_url}</span>
                   </div>
                   <button
                       className="w-full h-8 px-2 rounded bg-black text-white"
                       type="submit">
                       Save Meta Tags
                   </button>
               </form>
           </div>
       </>
   );
}
