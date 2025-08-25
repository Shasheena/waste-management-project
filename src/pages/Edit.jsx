import React, { useState } from "react";
import './Dashboard.css';

const EditItem = () => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      itemName,
      category,
      price,
      quantity,
      description,
      images,
    });
    alert("Item Edited!");
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2> Edit  Item </h2>
        <button><i className="fa-solid fa-arrow-right"></i> Back to Dashboard</button>
      </div>

      

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4"></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-grid">
  <div>
    <label>Item Name</label>
    <input
      type="text"
      value={itemName}
      onChange={(e) => setItemName(e.target.value)}
      placeholder=""
      className="border rounded p-2 input-small"
    />
  </div>
  <div>
    <label>Category</label>
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded p-2 input-small"
    >
      <option>Select category</option>
      <option>Polythene </option>
      <option>Plastics</option>
      <option>Paper</option>
      <option>Reusable items</option>
    </select>
  </div>
  <div>
    <label className="block text-gray-700">Price</label>
    <input
      type="number"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      placeholder=""
      className="border rounded p-2 input-small"
    />
  </div>
  <div>
    <label className="block text-gray-700">Quantity</label>
    <input
      type="number"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      placeholder=""
      className="border rounded p-2 input-small"
    />
  </div>
</div>
           
<div className="description-field">
  <label className="block text-gray-700">Description</label>
  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder=""
    className="w-full border rounded p-2 h-24"
  />
</div>


  <div>
    <div className="image-field">
    <label className="block text-gray-700">Item Images</label>
    <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded">
      
      <input
        type="file"
        multiple
        onChange={handleImageUpload}
        className="hidden"
       
        id="file-upload"
      />
     
      <label htmlFor="file-upload" className="cursor-pointer text-green-500">
        Click to upload images or drag and drop
      </label>
      </div>
      
    </div>
    {images.length > 0 && (
      <div className="mt-2 text-sm text-gray-700">
        {images.map((file, index) => (
          <p key={index}>{file.name}</p>
        ))}
      </div>
    )}
  </div>

<div className="button-container">
  <button
    type="button"
    onClick={() => {
      setItemName("");
      setCategory("");
      setPrice("");
      setQuantity("");
      setDescription("");
      setImages([]);
    }}
  >
    Cancel
  </button>

  <button type="submit">Edit Item</button>
</div>


</form>
</div>
</div>
  );
};

export default EditItem;
