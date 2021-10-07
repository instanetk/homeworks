# HomeWorks: a lead generation and CRM application

An appointment booking and lead generation app. Sends email and SMS upon successful client adquisition. Optionally allows user to register a personal account.

## OVERVIEW

My customer operates in the home services industry. My motivation was to create an app similar to HomeAdvisor where they could capture business leads according to the services provided. The business leads would come in in the form of appointment request for at-home estimates. It would be needed to organize these appointments in chronological order as well as have way to annotate or otherwise track the progression of the lead from capture, contacted, visited to job completion. In a way, it is a simple CRM application. Below, I go over the design process and ideation.

## STRATEGY

Wanting to create credibility and a positive image for app users, the main idea was to center the user interaction on the Google Maps service. Having a Google Map dynamically offer autocompletion for the service address (narrowing the suggestions to the Central Florida area coordinates) and then centering the map’s pin on the home address would at the same time provide accurate validated data instead of poorly formatted or incomplete addresses.

## EXECUTION

### UI:

The first 30 hours were spent crafting the mobile-first UI using Tailwind CSS. Making it responsive and achieving basic UI interaction effects paved the way to begin creating the scaffolding of the app.

### ROUTING:

Creating the first routes allowed the project to have a structure. This period encompassed server setup and project boilerplate.

### USER REGISTRATION & AUTHENTICATION:

Because there’d be an admin dashboard, creating protected routes and public content was imperative at first. Here, I had to review previously learned material about creating JSON Web Tokens and password encryption.

### LANGUAGE SUPPORT i18n INTERNATIONALIZATION:

Implement support for bilingual UI using a common library.

### SCOPE SIMPLIFICATION:

By this point I’m understanding my original goal to clone HomeAdvisor may be too ambitious and broad. Decide against supporting 3 tiers of users (customer, contractor, admin) to only admin. Originally idea was to assign overflow leads to registered contractors at a commission model. Learned about scope and budget relationship…

### CODE CLEANUP:

Learning to refactor and keep code as clean and lean as possible. Extract components which can be abstracted and remove CSS classes from HTML in favor of a referenced value from a style object.

### GOOGLE MAPS:

Spend a week studying the Google Maps API and integrating it with React. A lot of resourcefulness was needed here reading not only official documentation but also StackOverflow threads. Eventually, I am receiving the desired data from each request and the autocomplete function is working on the frontend. Map now zooms to address coordinates.

===========

## 100 hour mark.

===========

### NOTIFICATIONS:

Using SendGrid SMTP services I enable the Express server to send an email of a new appointment to the administrator as well as a text message to their phone number on the instant one is received. I intend the app to keep real-time updates to the admins as it is intended to function with traffic purchased from Facebook ad campaigns. No lead can go unnoticed.

## ADMIN DASHBOARD:

I’m using a calendar component to provide a date range with which to query the MongoDB Atlas instance and return appointments that fall between two dates.

This in turn updates the count of appointments returned for the date selection and the number of which have been completed.

Here, I decide I want the administrator to be able to know how many people are currently online browsing the site and implement Socket.IO to enable WebSocket polling from the Express server to the React app.

Also, updating the completed count as soon as its state is updated in the database by using MongoDB’s ChangeStream to trigger a Socket.IO event which in turn updates the DB query.

Finally, allowing the administrator to click on an individual appointment to see further details such as service type, address map, customer name and contact information as well as any notes submitted during lead capture.

### DEPLOYMENT:

The app is ready for production. But I need to learn about CI/CD on the go. The next 12 days are spent watching YouTube videos about Docker, GitHub Action workflows, YML and more… Finally, I have two containers, one for the front-end, one for the back-end, which generate automatically on a new push to the master branch on GitHub. Now I can continue to do continuous improvement and deployment as I release the app.

===========

## 200 hour mark.

===========

The app is released on January 26, 2021.

===========
