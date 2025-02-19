import React, {useState, useEffect} from 'react'
import {set, useFormValue, useClient} from 'sanity'
import Draggable from 'react-draggable'
import {Button, Select} from '@sanity/ui'
import {nanoid} from 'nanoid'

const DraggableImageEditor = (props) => {
  const {value = [], onChange} = props
  const [images, setImages] = useState(value || [])
  const [photoOptions, setPhotoOptions] = useState([])
  const client = useClient()

  useEffect(() => {
    if (value) {
      const normalizedImages = value.map((img) => ({
        ...img,
        x: Number(img.x) || 0,
        y: Number(img.y) || 0,
        width: Number(img.width) || 150, // Default width
        height: Number(img.height) || "auto",
        zIndex: Number(img.zIndex) || 1,
      }));
  
      setImages(normalizedImages);
    }
  }, [value]);
  

  // Add a new referenced image
  const addImage = () => {
    const newImage = {
      _key: nanoid(),
      photo: null, // Reference will be set later
      x: Math.random() * 500,
      y: Math.random() * 500,
      width: 300,
      height: 'auto',
      zIndex: 1,
    }
    setImages([...images, newImage])
    onChange(set([...images, newImage]))
  }

  // Update image position
  const updatePosition = (index, data) => {
    const updatedImages = [...images].map((img, i) =>
      i === index
        ? {
            ...img,
            x: Number(data.x) || 0, // Ensure it's a number
            y: Number(data.y) || 0,
          }
        : img
    );
  
    setImages(updatedImages);
    onChange(set(updatedImages));
  };
  

  const updateSize = (index, width, height) => {
    const updatedImages = [...images].map((img, i) =>
      i === index
        ? {
            ...img,
            width: Number(width) || 0,
            height: Number(height) || 0,
          }
        : img
    );
  
    setImages(updatedImages);
    onChange(set(updatedImages));
  };
  

  // Set referenced photo
  const setPhotoReference = (index, photoId) => {
    const updatedImages = [...images]
    updatedImages[index].photo = {_type: 'reference', _ref: photoId}
    setImages(updatedImages)
    onChange(set(updatedImages))
  }

  return (
    <div style={{position: 'relative', width: '100%', height: '800px', background: '#fff'}}>
      <Button text="Add Image" onClick={addImage} style={{marginBottom: '10px'}} />
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          background: '#fff',
        }}
      >
        {images.map((img, index) => (
          <Draggable
            key={img._key}
            position={{x: img.x || 0, y: img.y || 0}}
            onStop={(e, data) => updatePosition(index, data)}
          >
            <div style={{position: 'absolute', cursor: 'move'}}>
              {!img.photo ? (
                <Select onChange={(e) => setPhotoReference(index, e.target.value)}>
                  <option value="">Select a photo</option>
                  {photoOptions.map((photo) => (
                    <option key={photo._id} value={photo._id}>
                      {photo._id}
                    </option>
                  ))}
                </Select>
              ) : (
                <img
                  src={photoOptions.find((p) => p._id === img.photo._ref)?.url || ''}
                  alt=""
                  style={{
                    width: img.width || 'auto',
                    height: img.height || 'auto',
                    zIndex: img.zIndex || 1,
                  }}
                />
              )}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  )
}

export default DraggableImageEditor
