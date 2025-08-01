import React, { useState } from "react";

const ACCESS_KEY = "-bWlOrP9gCptn2f7-ZoAEjNalE1clWI7PugxCIasIZo"; // вставь свой ключ сюда

export default function App() {
  const [query, setQuery] = useState("Ukraine");
  const [images, setImages] = useState([]);

  const searchPhotos = async () => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    setImages(data.results);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <img
          src="/Large_coat_of_arms.png"
          alt="Ukraine Coat of Arms"
          style={{ width: "120px", height: "auto", marginBottom: "10px" }}
        />
      </aside>
      <main className="main-content">
        <h1>🌍 Global Image Generator</h1>
        <p>Type anything and discover photos!</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for images..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchPhotos}>Search</button>
        </div>
        <div className="gallery">
          {images.map((img: any) => (
            <img key={img.id} src={img.urls.small} alt={img.alt_description} />
          ))}
        </div>
      </main>
    </div>
  );
}
