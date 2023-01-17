# Notstagram
Notstagram is a clone of Instagram using ReactJS and Typescript on the frontend drawing from Firebase and Firestore on the backend.

# Current Features
Currently, only the Main Feed and Explore pages have full functionality.

### Main Feed
The main feed draws from Firebase to manage posts. Each post's information is maintained and accessibly via calls to the database.
Comments are stored in an array and are intially collapsed.
Images are stored using Firestore.

### Explore Page
The explore page uses picsum to generate random photos to simulate the feel of the Instagram explore page. In lieu of infinite scrolling, Notstagram implements a Discover button to randomize the displayed images.

### Current User Information
Current user information is kept in state using React's Context API. User profile information (profile picture, username, full name) is shared with child components and kept in sync.

### Responsiveness
The interface changes and adjusts based on the user's screen size. The side navbar collapses on medium sized screens. On smaller screens, a bottom navbar and top searchbar with branding is displayed.



