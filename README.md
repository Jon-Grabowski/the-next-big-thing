![alt text](/client/public/assets/thenextbigthing-high-resolution-logo-color-on-transparent-background-cropped.png)

# theNextBigThing

Welcome to theNextBigThing website! This platform allows you to explore, pre-order, and manage your interactions with the groundbreaking theNextBigThing models. Below are instructions for running the application and a guide to help you navigate through the different features:

## How to Use 

1. **Clone Repository:** Start by cloning this repository to your local machine using `git clone git@github.com:Jon-Grabowski/the-next-big-thing.git`.

2. **Install Dependencies:** Navigate to the project directory and install the necessary dependencies with `npm install --prefix client` and `pipenv install`.

3. **Generate and Seed the Database:** Enter the development environment by using `pipenv shell`. Once in the shell, cd in the `server/` directory and run `flask db upgrade` to create the database file. Then run `python seed.py` to seed the database. 

4. **Launch the Backend Server:** From the `server/` directory, run `python app.py`.

5. **Run the Application:** Open a new terminal and navagate to the project directory. Launch the website using `npm start --prefix client/`. This should launch the website in your browser.

6. **Explore and Interact:** Browse through product details, sign up or log in to your account, pre-order models, manage pre-orders, and edit account information.

## Features

### 1. Product Information and Site Content
Discover detailed information for the three theNextBigThing models: Original, Pro, and Lite. Get a glimpse of the enigmatic innovations that await. Navigate to the About page to learn about theNextBigThing's creator and the research and tech that went into creating it. Visit the Early Reviews page to see what promient figures from different industries had to say about their early access exposure to theNextBigThing.

### 2. Account Management
- **Sign Up:** New users can create an account to place pre-orders for theNextBigThing.
- **Login:** Existing users can securely log in to their accounts and have their session saved in a cookie.

### 3. Pre-Order Placement
- **Create Pre-Orders:** Once logged in, you can pre-order theNextBigThing models of your choice. Reserve your spot to be among the first to experience the future. **limit 2 pre-orders per model per customer.
- **View Pre-Orders:** Keep track of your pre-orders and see the models you've selected.
- **Delete Pre-Orders:** Modify your pre-order selection by deleting existing pre-orders.

### 4. Account Details
- **Edit Account Info:** Update your personal information and preferences.


## Technologies Used

- HTML5, CSS with Bootstrap, JavaScript with React for frontend development
- Python with Flask and SQLalchemy for backend development

## Work in Progess

This site is a work in progress and will continue to be developement. Planned new features include:

- Giving certain users admin priviledges to access additional functionality.
- A cart/checkout system for pre-orders.
- A way for users to enter mock payment information and have it stored to their account.
- Adding additional products and accessories 
