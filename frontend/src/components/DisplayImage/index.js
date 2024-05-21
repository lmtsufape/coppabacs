import React, { useState, useEffect, use } from 'react';
import api from "@/api/http-common";

const DisplayImage = ({imagesName}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [fileName, setFileName] = useState('');

  const handleInputChange = (event) => {
    setFileName(event.target.value);
  };

  useEffect(() => {
    if (imagesName) {
      handleFetchImage();
    }
  }, [imagesName]);

  const handleFetchImage = async () => {
    try {
      const response = await api.get(`/arquivos/${imagesName}`, {
        responseType: 'blob', // Important for handling binary data
      });

      const url = URL.createObjectURL(new Blob([response.data]));
      setImageSrc(url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
     
      {imageSrc && (
        <div>
          <h3>Fetched Image:</h3>
          <img src={imageSrc} alt="Fetched" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default DisplayImage;
