import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

// API configuration constants
const API_BASE_URL = 'https://picsum.photos/v2'
const ITEMS_PER_PAGE = 10

// Custom hook for fetching image data
const useImageGallery = (page) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchImages = useCallback(async (pageNumber) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await axios.get(`${API_BASE_URL}/list`, {
        params: { page: pageNumber, limit: ITEMS_PER_PAGE }
      })
      setImages(response.data)
    } catch (err) {
      setError(err.message || 'Failed to fetch images')
      setImages([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchImages(page)
  }, [page, fetchImages])

  return { images, loading, error, refetch: () => fetchImages(page) }
}

// Reusable Button component to reduce code duplication
const Button = ({ onClick, disabled, children, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      bg-teal-500 hover:bg-teal-600 active:scale-95 px-5 py-2 font-bold rounded text-white ml-4
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-teal-500 disabled:active:scale-100
      ${className}
    `}
  >
    {children}
  </button>
)

// Image card component for better separation of concerns
const ImageCard = ({ image }) => (
  <div className='border-2 border-teal-500 p-4 rounded-lg m-4' key={image.id}>
    <img 
      src={image.download_url} 
      alt={image.author}
      className='w-full h-64 object-cover rounded'
      loading="lazy"
    />
    <h2 className='text-xl font-bold mt-2'>{image.author}</h2>
  </div>
)

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className='flex justify-center items-center p-8'>
    <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500'></div>
  </div>
)

// Error message component
const ErrorMessage = ({ message, onRetry }) => (
  <div className='text-center p-4'>
    <p className='text-red-500 mb-2'>{message}</p>
    <button 
      onClick={onRetry}
      className='text-teal-500 hover:underline'
    >
      Try Again
    </button>
  </div>
)

const App = () => {
  const [page, setPage] = useState(1)
  
  // Using custom hook for better separation of concerns
  const { images, loading, error, refetch } = useImageGallery(page)

  // Handler for navigating to next page
  const handleNext = useCallback(() => {
    setPage(prevPage => prevPage + 1)
  }, [])

  // Handler for navigating to previous page
  const handlePrevious = useCallback(() => {
    setPage(prevPage => Math.max(1, prevPage - 1))
  }, [])

  // Handler for refreshing current page
  const handleRefresh = useCallback(() => {
    refetch()
  }, [refetch])

  return (

    <div className='bg-black p-4 text-white min-h-screen'>
      <h1 className='text-3xl font-bold fixed text-center mb-4'>{page}</h1>
      {/* Header section with controls */}
      <div className='flex flex-wrap items-center gap-4 mb-4'>
        <Button onClick={handleRefresh}>
          Refresh
        </Button>
        
        <Button 
          onClick={handlePrevious} 
          disabled={page <= 1}
        >
          Previous
        </Button>
        
        {/* Page indicator */}
        <span className='ml-4 text-lg'>
          Page {page}
        </span>
        
        <Button onClick={handleNext}>
          Next
        </Button>
      </div>

      {/* Error state */}
      {error && <ErrorMessage message={error} onRetry={handleRefresh} />}

      {/* Loading state */}
      {loading && <LoadingSkeleton />}

      {/* Empty state */}
      {!loading && !error && images.length === 0 && (
        <p className='text-center p-4'>No images available</p>
      )}

      {/* Image gallery grid */}
      {!loading && !error && images.length > 0 && (
        <div className='capitalize mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
