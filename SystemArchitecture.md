# Sparta Architecture

# Component Diagram
![Component Diagram](https://github.com/topics-sparta/topics-repo/assets/91035430/8a3eed9d-9232-4fe5-b4a3-1db11679ea7b)

Sparta consists of three components: a web client, an application server, and a database server. Our app's front end is provided to the user through the web client. When users make fetch or post request (depending on which component they're on), the web client sends a HTTPS request with JSON data to the app server. In response to the action, the app server sends an HTTPS request with  JSON data to the database server, which is Supabase. In either case, the database server (Supabase) stores the data or sends it to the app server. 




# ER Diagram

![ER Diagram](https://github.com/topics-sparta/topics-repo/assets/91035430/e5848af0-f755-4440-a3ba-e225d8f5eb6c)

So far we have two entities in our database: `users` and `nutrition_log`. User information and goals are stored in the `users` tables. And, the `nutrition_log` table keeps track of the macronutrients and micronutrients of specific food products. In addition, the nutrition_log has a column called uuid that references to the `users` table's uuid (this is the foreign key). Additionally, the nutrition_log and the user's table have a one-to-many link. In the `nutrition log`, users can make multiple entries, but each entry is related to one specific user. 


# Sequence Diagram for Signin

![Screen Shot 2024-04-07 at 10 59 00 PM](https://github.com/topics-sparta/topics-repo/assets/91035430/7ec99587-7308-44e4-b5cf-b30bb0abc1df)





The user loads into the application and will view the landing page. From there, if the user has an account they will be prompted to sign in. When the user clicks the sign-in button, they will be redirected to the `sign-in` page. From there, the user will enter their credentials. The credentials will then be passed into `login/actions`. Before the information is sent to the Database Server, if there are any errors ( missing fields, invalid email syntax ) it will notify the user. When the information reaches the Database Server, the DB will either return an error or a success. If there is an error, the error will be sent back to the `login-page` where the user will be able to view it. If there is no error ( success) then the user will be redirected to the `user-dashboard` where they can view their dairy, activity, settings, etc.
