import { createSignal, createEffect } from 'solid-js';
import './App.css';

function App() {
  const [dogImage, setDogImage] = createSignal("");

  // Function to fetch a random dog image
  const fetchDogImage = async () => {
    const url = `https://dog.ceo/api/breeds/image/random`;

    const response = await fetch(url);
    const data = await response.json();
    setDogImage(data.message); // Store the dog image URL
  };

  // Use createEffect to fetch the dog image when the app loads
  createEffect(() => {
    fetchDogImage();
  });

  return (
    <>
      <div class="box">
        <button onClick={fetchDogImage} class="bg-blue-700 text-white text-center rounded-b-md shadow-black hover:right-4 transition-colors">Get Random Dog Image</button>
      </div>
      
      <div class="box card">
        {dogImage() ? (
          <img src={dogImage()} alt="Random Dog" style={{ width: '300px', height: 'auto' }} class="card-item" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
