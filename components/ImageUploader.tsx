import React, { useState, useRef, useEffect } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelected: (file: File | null) => void;
  selectedImage: File | null;
  texts: {
    uploadTip: string;
    uploadSub: string;
  };
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelected, selectedImage, texts }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }, [selectedImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelected(file);
    }
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageSelected(null);
  };

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/webp, image/heic"
        className="hidden"
      />

      {!previewUrl ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 h-64 shadow-sm hover:shadow-md bg-white"
        >
          <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-blue-100">
            <Upload className="w-8 h-8 text-gray-500 group-hover:text-blue-600 transition-colors" />
          </div>
          <p className="text-gray-600 font-medium">{texts.uploadTip}</p>
          <p className="text-gray-400 text-sm mt-2">{texts.uploadSub}</p>
        </div>
      ) : (
        <div className="relative group rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-auto max-h-[500px] object-contain mx-auto"
          />
          <button
            onClick={clearImage}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md hover:bg-red-50 text-gray-700 hover:text-red-500 transition-all backdrop-blur-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;