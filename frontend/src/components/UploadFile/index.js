import React, { useState } from 'react';
import api from "@/api/http-common";

const UploadFile = ({ onUploadComplete }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('file', selectedFiles[i]);
    }

    try {
      const response = await api.post('arquivos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onUploadComplete(response.data); // Call the callback function with the uploaded file names
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Files</button>
      {previewUrls.length > 0 && (
        <div>
          <h3>Image Previews:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {previewUrls.map((url, index) => (
              <img key={index} src={url} alt={`Preview ${index}`} style={{ width: '300px', marginRight: '10px' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
