🌍 Rest Countries API Project

      A simple and interactive Country Information Finder built using HTML, CSS, and JavaScript.
      This project fetches real-time country data from the REST Countries API and displays important details like name, capital, flag, population, region, maps link, and more.

📌 Project Overview

    This web application allows users to search for any country by name and instantly view detailed information about it.
    By default, the app loads data for India (Bharat) when the page is opened.

    The project is beginner-friendly and focuses on:

     1. API integration

     2. DOM manipulation

     3. Dynamic UI updates
  
     4. Clean and responsive UI design

🚀 Features

    🔍 Search country by name

    🌐 Fetch real-time data from REST Countries API

    🏳️ Display country flag

    🏛️ Show capital, region, sub-region

    👥 Population and total area details

    🗺️ Google Maps redirect link

    🌍 Continent and borders information

    ⚡ Fast and lightweight (no frameworks)

🛠️ Technologies Used

    1. HTML5 – Page structure

    2. CSS3 – Styling and layout

    3. JavaScript – Logic, API calls, DOM manipulation

    4.REST Countries API – External API for country data

📂 Project Structure  

    Rest-Country-API/
│
├── index.html      # Main HTML file
├── style.css       # Styling file
├── script.js       # JavaScript logic and API handling
└── README.md       # Project documentation


📄 File Explanation

1️⃣ index.html

    Contains the basic structure of the web page

    Includes a search form for country name

    Displays results dynamically inside the .second container

    Links external CSS and JavaScript files

2️⃣ script.js

    1. Handles API requests using XMLHttpRequest

    2. Fetches country data from: https://restcountries.com/v3.1/name/{countryName}

    3. Dynamically creates and displays country details

    4. Special handling for:

    5. Flags → displayed as images

    6. Maps → clickable Google Maps link

    7. Clears old data before displaying new results

    8. Loads default country data on page load    


3️⃣ style.css

    1. Clean and modern UI design

    2. Flexbox used for key-value layout

    3. Responsive and user-friendly styling

    4. Styled flag images and clickable map links

    5. Error and loading styles included for better UX
    

▶️ How to Run the Project

    1. Download or clone the repository : git clone https://github.com/your-username/rest-country-api.git

    2. Open the project folder

    3. Double-click on index.html

    4. Enter a country name and click Search
    

✅ No server or installation required

🌐 API Used

    REST Countries API

    Endpoint : https://restcountries.com/v3.1/name/{country}

    Official Docs : https://restcountries.com/
    

👨‍💻 Author

    Rahul Kumar

    Frontend / MERN Stack Developer (Fresher)
    📍 Noida, India
    

📜 License

    This project is open-source and free to use for learning and practice purposes.    




    
