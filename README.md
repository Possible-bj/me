# benjaminpossible.gitub.io

# JSP-MASHA-API

### Once code has been pulled run the install command

> \>\_ _npm install_

### Seeding the database with admin data

Simply run the command

> \>\_ _npm run data:import_

On completion of the above process, start your database then run the following command to start the DEV server

> \>\_ _npm run dev_

### Sending Email Error?

If 2FA is **NOT** enabled then you simply need to enable less secure apps for that email address
**_[Enable Less Secure Apps](https://myaccount.google.com/lesssecureapps)_**

# API - DOCS

# User Api Documentation

#### Login User

**@route:** **POST** _/api/users/login_
**@access:** Public

**@request_body:**

> {
> "email": `User Email`,
> "password": `User password`
> }

**@response:**

> User: { \_id: \_id: firstName, lastName, email, isAdmin, status, positionHeld, token }

#### Create a user

**@route:** **POST** _/api/users_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**

**@request_body:**

> {
> "firstName": "John",
> "lastName": "Doe",
> "email": "johndoe@example.com",
> "password": `<some characters >= 8>`,
> "positionHeld": "member"
> }

**@response:**

> **@response:** Created User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Get all users

**@route:** **GET** _/api/users_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**

> **@request_body:** _No request body_

**@response:**

> Users: [{ \_id: firstName, lastName, email, isAdmin, status, positionHeld }]

#### Update a user

**@route:** **PUT** _/api/users/:id_
**@access:** Private/Admin
:id => user id to be updated
**@authorization:** **_`Bearer <User Token>`_**

**@request_body:**

> {
> "firstName": "Jane || null",
> "lastName": "Doe || null",
> "positionHeld": "member || null"
> }

**@response:**

> Updated User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Update logged in user profile

**@route:** **PUT** _/api/users/profile_
**@access:** Private
**@authorization:** **_`Bearer <User Token>`_**

**@request_body:**

> {
> "firstName": "nightly || null",
> "lastName": "camper || null",
> "email": "email@example.com || null",
> "password": "new password || null",
> }
> **@response:**

> Updated User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Get logged in user profile

**@route:** **PUT** _/api/users/profile_
**@access:** Private
**@authorization:** **_`Bearer <User Token>`_**

> **@request_body:** _No request body_

**@response:**

> User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Get a user by ID

**@route:** **GET** _/api/users/:id_
**@access:** Private
**@authorization:** **_`Bearer <User Token>`_**
_:id => user id to be fetched_: expect value is the \_id property of the user

> **@request_body:** _No request body_

**@response:**

> User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Restore deleted User

**@route:** **PATCH** _/api/users/:id_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**
_:id => user id to be restored_: expect value is the \_id property of the user

> **@request_body:** _No request body_

**@response:**

> User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Make a User an Admin || Remove as an Admin

**@route:** **PATCH** _/api/users/admin_status/:id_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**
_:id => user id to be updated_: expect value is the \_id property of the user

> **@request_body:** _No request body_

**@response:**

> User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Soft Deleting a User - Trashed

**@route:** **PATCH** _/api/users/trash/:id_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**
_:id => user id to be Trashed_: expect value is the \_id property of the user

> **@request_body:** _No request body_

**@response:**

> { message: `User Deleted Successfully` }

#### User Verification route - Verify User

**@route:** **POST** _/api/users/profile_
**@access:** Public

**@request_body:**

> {
> "email": "email@example.com",
> "verficationToken": "faa2308ea42f3bfd56a580a366f83aee34d61dec"
> }

**@response:**

> User: { \_id: firstName, lastName, email, isAdmin, status, positionHeld }

#### Password Recovery Request

**@route:** **POST** _/api/users/password/recover_
**@access:** Public

**@request_body:**

> {
> "email": "email@example.com"
> }

**@response:**

> { message: `Please visit your mail for a link to reset your password` }

#### Password Reset Token Validity Check

**@route:** **GET** _/api/users/password/reset/:passwordResetToken_
**@access:** Public
Client route _/users/password/reset?email=${user.email}&token=${passwordResetToken}_
Extract "email" and "token"
_:passwordResetToken => password reset token sent to user mail_: expect value is the token from the above "token" query

> **@request_body:** _No request body_

**@response:**

> { valid: true }

#### Password Reset

This route Resets the password, should be ready to fire off when Token validity check passsed `TRUE` and user clicks
change password or reset or whatever you would like to call the button after providing a new password

**@route:** **POST** _/api/users/password/reset_
**@access:** Public

**@request_body:**

> {
> "email": "email@example.com",
> "password": `<User New Password>`,
> "passwordResetToken": `<token>`
> }

**@response:**

> { message: `Your password has been changed successfully, navigate to the login screen to login` }

# Category Api Documentation

#### Add Category

**@route:** **POST** _/api/categories_
**@access:** Private/Admin

**@request_body:**

> {
> "description": `your category`
> }

**@response:**

> { message: `Category added Successfully!`}

#### Get all Categories

**@route:** **GET** _/api/categories_
**@access:** Public

> **@request_body:** _No request body_

**@response:**

> Categories: [{ \_id, description }]

#### Edit a Category

**@route:** **PATCH** _/api/categories/:id_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**
_:id => category id to be updated_

**@request_body:**

> {
> "description": `your category`
> }

**@response:**

> Updated Category

#### Delete a Category

**@route:** **DELETE** _/api/categories/:id_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**
_:id => category id to be updated_

> **@request_body:** _No request body_

**@response:**

> { message: `Category deleted Successfully!` }

# Sermon API Documentation

#### Create a sermon by an admin user only

**@route:** **POST** _/api/sermons_
**@access:** Private/Admin
**@authorization:** **_`Bearer <User Token>`_**

**@request_body:** send as "form data" containing the following

> file input of name="banner"
> text input of name="body",
> text input of name="topic",
> text input of name="brief",
> select input of name="category_id" and value as "id" of the category,
> select input of name="status" and value as number 0 or 1. => 0 for DRAFT, 1 for PUBLISHED

**@response:**

> { message: `Sermon Created successfully!` }

#### Get all available sermons

**@route:** **GET** _/api/sermons_
**@access:** Public

**@request_body:** _No request body_

**@response:**

> sermon array: [{
>
> > \_id,
> > user_id,
> > category_id,
> > body,
> > topic,
> > brief,
> > status,
> > slug,
> > category
> > }]

#### Update a sermon

**@route:** **PUT** _/api/sermons/:id_
**@access:** Private/Admin
_:id => sermon id to be updated_: expect value is the \_id property of the sermon

**@request_body:**

> {
> "body": `"text || null"`,
> "topic": `"text || null"`,
> "brief": `"text || null"`,
> "status": `1 || 2 || null`,
> "category_id": `ObjectId || null`
> }

**@response:**

> updated sermon: {
> \_id,
> user_id,
> category_id,
> body,
> topic,
> brief,
> status,
> slug,
> category
> }

#### Trash a sermon - soft deleting a sermon AKA move to bin

**@route:** **PATCH** _/api/sermons/trash/:id_
**@access:** Private/Admin
_:id => sermon id to be updated_: expect value is the \_id property of the sermon

**@request_body:** _No request body_

**@response:**

> { message: `Sermon has been Trashed!` }

#### Restore a trashed a sermon - move out of bin and move to draft

**@route:** **PUT** _/api/sermons/:id_
**@access:** Private/Admin
_:id => sermon id to be updated_: expect value is the \_id property of the sermon

**@request_body:** _No request body_

**@response:**

> { message: `Sermon has been Moved to draft!` }

#### Get sermon by its ID

**@route:** **GET** _/api/sermons/:id_ <br />
**@access:** Public <br />
_:id => sermon id to be updated_: expect value is the \_id property of the sermon <br />

**@request_body:** _No request body_ <br />

**@response:** <br />

> single sermon: { <br /> > \_id, <br />
> user_id, <br />
> category_id,<br />
> body,<br />
> topic,<br />
> brief,<br />
> status,<br />
> slug,<br />
> category<br />
> }

#### Get sermon banner

**@route:** **GET** _/api/sermons/:id/banner_ <br />
**@access:** Public<br />
_:id => sermon id to be updated_: expect value is the \_id property of the sermon<br />
<br />
**@request_body:** _No request body_<br />

**@response:**<br />

> img/png Buffer<br />

#### Update sermon banner

**@route:** **POST** _/api/sermons/:id/banner_<br />
**@access:** Private/Admin<br />
_:id => sermon id to be updated_: expect value is the \_id property of the sermon<br />

**@request_body:** send as "form data" containing the file alone<br />

> file input of name="banner"<br />

**@response:**<br />

> { message: `'Sermon banner updated successfully'` } <br />
