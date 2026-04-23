import React, { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [isError, setIsError] = useState(false)

  return (
    <div className={className}>
      {!isError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setIsError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">📷</span>
        </div>
      )}
    </div>
  )
}

export default ImageWithFallback