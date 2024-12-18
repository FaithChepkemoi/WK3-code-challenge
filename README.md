# Flatdango - Movie Ticket Purchase Application

Flatdango is a mini web application that allows users to view available movies at the Flatiron Movie Theater and purchase tickets. The application fetches movie data from a local JSON server and displays movie details dynamically.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- View a list of available movies on the left side of the page.
- Click on a movie name to see its details, including poster, title, runtime, showtime, and available tickets.
- Purchase tickets for a movie, with real-time updates on available tickets.
- Responsive design that works well on various devices.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server (for mock API)
- Flexbox for layout

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/FaithChepkemoi/flatdango.git

2. **Navigate into the directory**:
    ```bash
        cd flatdango

3. **Start the JSON server**:
  make sure you are in the project directory and run:
   ```bash
       json-sever --watch db.json
  This will start the server at http://localhost:3000.

4. **Open the appication**:  
   Open index.html in your web browser to view the application.

 ## Usage
1. When the application loads, you will see a list of movies on the left side.

2. Click on any movie title to view its details.

3. If tickets are available, click the "Buy Ticket" button to purchase a ticket.

4. The number of available tickets will update in real-time.

## File Structure
flatdango/  
├── index.html # Main HTML file  
├── styles.css # CSS file for styling  
├── script.js # JavaScript file for logic  
├── db.json # JSON file for mock server data  
└── images/ # Folder for movie poster images  
├── black_panther.jpg  
├── other_image.jpg  
└── ... # Other images as needed  



## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

1. **Fork the repository**.
2. **Run the server locally using the following command**
   ~~~bash
    json-server --watch db.json
   ~~~
3. **Navigate to the project directory**
~~~bash
cd week-3-code-challenge
~~~
4. **Open index.html in your web browser**   
      
        
5. **Open a pull request**.  


 ## License 
  This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.











