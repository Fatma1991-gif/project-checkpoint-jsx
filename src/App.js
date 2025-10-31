import React from "react";
import ProductCard from "./Produitscard";
import products from "./products";
import "./App.css"; // نستعمل ملف التنسيق

const firstName = "Fatma"; // Ton prénom

function App() {
  return (
    <div className="app">
      {/* Titre principal */}
      <h1 className="title">Nos Bottines</h1>
      <div className="separator"></div>

      {/* Message de bienvenue */}
      <div className="welcome">
        {firstName ? (
          <>
            <p>
              👋 Bonjour, <strong>{firstName}</strong> !
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
              alt="avatar"
              className="avatar"
            />
          </>
        ) : (
          <p>Hello, there !</p>
        )}
      </div>

      {/* Cartes produits */}
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
