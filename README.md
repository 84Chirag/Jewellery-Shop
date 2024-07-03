<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Web Application</title>
</head>
<body>

<h1>E-Commerce Web Application</h1>

<img src="./src/assets/shop.png.png" alt="E-Commerce">

<h2>Project Overview</h2>
<p>This project is a full-featured e-commerce web application designed to provide a seamless shopping experience. The frontend is built using React and Vite, offering fast load times and a responsive design. Key features include user authentication, a dynamic product store, and an intuitive user interface.</p>

<h2>Key Features</h2>

<h3>User Authentication</h3>
<ul>
    <li><strong>Login and Signup:</strong> Users can sign up and log in to their accounts. Authentication is managed using JSON Web Tokens (JWT) stored in cookies.</li>
    <li><strong>Profile Management:</strong> Logged-in users can view and update their profile information, including changing their profile picture.</li>
    <li><strong>Alert System:</strong> Real-time alerts notify users of successful logins, signups, and other actions.</li>
</ul>

<h3>Navigation and Layout</h3>
<ul>
    <li><strong>Responsive Header:</strong> The header includes a logo, navigation links, and user-specific options like login/logout and profile access.</li>
    <li><strong>Dropdown Menu:</strong> The store section has a dropdown menu for navigating between men's, women's, and unisex categories.</li>
    <li><strong>Search Bar:</strong> Users can search for products directly from the header.</li>
</ul>

<h3>Store and Product Display</h3>
<ul>
    <li><strong>Dynamic Store Page:</strong> Displays products dynamically loaded from the backend. Users can filter and sort products by categories.</li>
    <li><strong>Product Details:</strong> Detailed product pages with images, descriptions, and purchase options.</li>
</ul>

<h3>Shopping Cart and Wishlist</h3>
<ul>
    <li><strong>Cart Management:</strong> Users can add products to their cart, view cart details, and proceed to checkout.</li>
    <li><strong>Wishlist:</strong> Users can add products to their wishlist for future purchases.</li>
</ul>

<h3>Checkout and Orders</h3>
<ul>
    <li><strong>Checkout Process:</strong> A streamlined checkout process ensures a smooth transaction experience.</li>
    <li><strong>Order History:</strong> Users can view their past orders and track the status of current orders.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>React:</strong> For building the user interface and managing the application state.</li>
    <li><strong>Vite:</strong> For a fast development environment and optimized build process.</li>
    <li><strong>React Router:</strong> For handling navigation and routing within the application.</li>
    <li><strong>JavaScript (ES6+):</strong> For scripting and implementing application logic.</li>
    <li><strong>CSS Modules:</strong> For styling components with scoped and maintainable CSS.</li>
    <li><strong>Font Awesome:</strong> For icons used in the navigation and UI elements.</li>
    <li><strong>js-cookie:</strong> For managing JWT tokens in cookies.</li>
</ul>

<h2>Code Highlights</h2>

<h3>State Management</h3>
<ul>
    <li>The <code>useState</code> hook is used extensively to manage component state, including user authentication status, form inputs, and alert visibility.</li>
    <li>The <code>useLocation</code> hook from React Router is used to highlight the active navigation link.</li>
</ul>

<h3>API Integration</h3>
<ul>
    <li>The <code>fetch</code> API is used for making asynchronous HTTP requests to the backend for login, logout, and signup functionalities.</li>
    <li>The login and signup forms handle user inputs and submit data to the backend, with appropriate success and error handling.</li>
</ul>

<h3>Form Handling</h3>
<ul>
    <li>Forms are handled with controlled components, ensuring that the React state is in sync with the form inputs.</li>
    <li>The signup form uses <code>FormData</code> to handle file uploads for user avatars.</li>
</ul>

<h3>Conditional Rendering</h3>
<ul>
    <li>Conditional rendering is used to display different navigation options based on the user's authentication status.</li>
    <li>The <code>Alert</code> component is conditionally rendered to show success or error messages.</li>
</ul>

<h2>User Experience</h2>
<p>The application provides an intuitive and responsive user interface, ensuring a smooth and enjoyable shopping experience. Users can easily navigate through the store, manage their cart and wishlist, and handle their account settings with ease. The use of real-time alerts enhances user interaction by providing immediate feedback on their actions.</p>

<h2>Security Considerations</h2>
<ul>
    <li><strong>JWT Authentication:</strong> Secure token-based authentication is implemented using JWTs, ensuring secure user sessions.</li>
    <li><strong>Form Validation:</strong> Basic client-side form validation ensures that user inputs are valid before submission.</li>
    <li><strong>Secure Cookies:</strong> JWT tokens are stored in HttpOnly cookies to prevent cross-site scripting (XSS) attacks.</li>
</ul>

<h2>Future Enhancements</h2>
<ul>
    <li><strong>Improved Product Filtering:</strong> Adding more advanced filtering options for products based on price, rating, and other attributes.</li>
    <li><strong>User Reviews:</strong> Implementing a review and rating system for products.</li>
    <li><strong>Enhanced Security:</strong> Adding features like two-factor authentication (2FA) and CAPTCHA for better security.</li>
</ul>

<h2>Conclusion</h2>
<p>The frontend of this e-commerce web application is designed to be fast, responsive, and user-friendly. With a focus on providing a smooth user experience and secure authentication, it offers all the essential features needed for an online store. The use of modern technologies and best practices ensures maintainability and scalability for future enhancements.</p>

</body>
</html>
