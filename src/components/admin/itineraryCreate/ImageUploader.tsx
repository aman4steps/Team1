import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';

const ImageUploader = () => { 

  const [images, setImages] = useState([]);
  const [altTexts, setAltTexts] = useState(['', '', '', '']);
  const [errors, setErrors] = useState([]);

  const handleImageChange = async (event, index) => {
    const selectedFile = event.target.files[0];
    const newImages = [...images];

    try {
      // Resize and compress the image
      const resizedImage = await new Promise(resolve => {
        Resizer.imageFileResizer(
          selectedFile,
          300, // Max width
          300, // Max height
          'JPEG', // Output format
          70, // Quality
          0, // Rotation
          (resizedImage) => {
            resolve(resizedImage);
          },
          'base64' // Output type: 'file' or 'base64'
        );
      });

      // Update state with the resized image
      newImages[index] = resizedImage;
      setImages(newImages);

      // Clear any previous errors
      const newErrors = [...errors];
      newErrors[index] = '';

      // Validate file size (example: 5 MB limit)
      const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
      if (selectedFile.size > maxSize) {
        newErrors[index] = 'File size exceeds 5 MB.';
      } else {
        // Validate file type
        if (!selectedFile.type.startsWith('image/')) {
          newErrors[index] = 'Please select an image file.';
        }
      }

      setErrors(newErrors);
    } catch (error) {
      console.error('Error resizing image:', error);
      setErrors(['Error resizing image. Please try again.']);
    }
  };

  const handleAltTextChange = (event, index) => {
    const newAltTexts = [...altTexts];
    newAltTexts[index] = event.target.value;
    setAltTexts(newAltTexts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all images are selected
    if (images.some(image => !image)) {
      alert('Please select an image for each upload field.');
      return;
    }

    // Here you can do something with the images and alt texts, like storing them in state or sending them to an API
    console.log(images);
    console.log(altTexts);
  };

  return (
    <form onSubmit={handleSubmit}>
      {[...Array(4)].map((_, index) => (
        <div className=' border rounded p-3 my-2' key={index}>
          <label className='flex flex-col sm:flex-row'>
            <span>
              Image {index + 1} : &nbsp;&nbsp;
            </span>
            <input  type="file" onChange={(e) => handleImageChange(e, index)} accept="image/*" />
          </label>
          <div className='flex gap-4 flex-col md:flex-row items-baseline py-5'>
            <div>
              {errors[index] && <p style={{ color: 'red' }}>{errors[index]}</p>}
              {images[index] && <img src={images[index]} alt={altTexts[index]} style={{ maxWidth: '120px' }} />}
            </div>
            <div>
              {images[index] &&(
                <label>
                  Alt Text:
                  <input className=' w-full  border sm:ml-5 rounded-md h-8 px-2 focus:border-primary outline-none text-para' type="text" value={altTexts[index]} onChange={(e) => handleAltTextChange(e, index)} />
                </label>
              )
              }
            </div>
          </div>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUploader;
