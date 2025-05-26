# Natours Tour Application

This application was created using pug templates and a MongoDB database, but migrated to use a React front-end. The back-end was built using Express and Node.js and a deployment is running at [https://natours-tdkr.onrender.com] with a free instance. This means that the loading process could take upwards of a few minutes to load.
Here are a list of users you can log in as to test the application:

- loulou@example.com (user)
- admin@natours.io (admin)
- sophie@example.com
- ayls@example.com
- kate@example.com (guide)
- eliana@example.com
- chris@example.com
- aarav@example.com
- steve@example.com (lead-guide)
- miyah@example.com
- ben@example.com
- laura@example.com
- max@example.com
- alex@example.com
- edu@example.com
- john@example.com
- lisa@example.com
- jennifer@example.com
- leo@example.com

(role) - different roles denoted in brackets for testing purposes.

Any user can be logged in with the password: `test1234`. 

## Installing

There are two folders in the repo, `api` and `client`. The client-side SPA React code can be found in the `client` folder and the back-end Node.js code can be found in the `api` folder. You must install both folders' dependencies. This can be done by running the `npm run build-app` command from a powershell or command prompt window in the root folder.
The application is then started with `npm run` from the root folder. If there are issues with the front-end code, try running the client folders `npm run build` command.

The environment variables need to be created to run locally. The following variables are needed:

- `AWS_ACCESS_KEY_ID=<your_aws_access_key>` (create a storage bucket on AWS to house the images)
- `AWS_REGION=<region_for_your_bucket>`
- `AWS_SECRET_ACCESS_KEY=<your_secret_access_key>`
- `DATABASE=<your_Mongo_Atlas_cluster_url>` (you can create a free account at <https://account.mongodb.com/account/register>, follow the database creation wizard and change the IP address to 0.0.0.0 so anyone can access, do not forget to copy the password)
- `DATABASE_PASSWORD=<copied_password_from_above_step>` (use the copied password here)
- `EMAIL_FROM=<a_verified_sendgrid_email>` (create a free account with sendgrid to send out emails from Postman requests, see Postman section below, this is the email account that will show up in the sender box when receiving the email)
- `JWT_COOKIE_EXPIRES_IN=90` (default is 90, which means 90 days, how long a jwt cookie will last for until it has expired)
- `JWT_EXPIRES_IN=90d` (default 90, same as above, but used in the actual token creation code)
- `JWT_SECRET=<your_jwt_secret>` (make this at least 32 characters long, no spaces)
- `NODE_ENV=production` (only use production here, unless you want to add more dev features - you will need a mailtrap account and more env variables - check the email.js file in the utils folder)
- `PORT=3000` (port where the backend is running)
- `SENDGRID_PASSWORD=<your_sendgrid_password>` (create a sendgrid account and then click SMTP relay in the wizard to reveal the password and your username)
- `SENDGRID_USERNAME=<your_sendgrid_username>` (this will probably be `apikey` if you are using a free account)
- `STRIPE_SECRET_KEY=<your_stripe_secret_key>` (create a free account on Stripe to get access to the API, get your secret key from your account page)
- `STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>` (create a webhook for checkout.session.completed with an endpoint of `http://localhost:3000/webhook-checkout` in a free sandbox environment - no live payments)
- `S3_BUCKET_NAME=<name_of_your_s3_bucket>`

**Place the environment variables in `config.env` in the `/api` folder**

---

## Using Stripe

When creating a payment with Stripe, whether on your own application or using the deployed one, enter `4242 4242 4242 4242` for a credit card number to process it correctly. All other information does not matter, as long as it passes validation.

## Postman

Information pertaining to sending requests to the back-end can be found [here](https://documenter.getpostman.com/view/43761227/2sB2cbbeQx) and was created with Postman. The general flow of the back-end is the user 'Signs up' at the `/api/v1/users/signup` route and then log in with `/api/v1/users/login`. If they have admin privileges based on the defined MongoDB database, they can do the requests with (ADMIN) in their name. 
Find more information at the Postman documentation and if you click the button at the top-right to run in Postman then you can see the structure of the scripts that save the token into the dev environment. 
The {{URL}} segment denoted in the URL is an environment variable and is `http://localhost:3000` for a dev environment. If you run a deployment, simply change to the URL of the deployment as the back-end and front-end are running at the same location *for now*.

## Importing data

The `/api/dev-data/data` folder has some .json data so you can see the structure of the data models. If you want to use the dev-data to start your database you can copy this `import-dev-data.js` script to the `api/dev-data/data` folder:

```js
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');
const Review = require('./../../models/reviewModel');
const User = require('./../../models/userModel');
const Booking = require('./../../models/bookingModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
	await Booking.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
```

then run it from the command line within the `api` folder as: `node dev-data\data\import-dev-data.js --import` to import or `node dev-data\data\import-dev-data.js --delete` to clear the database.

You will need to comment out the 'pre-save middleware' found in the following lines of code from `api\models\userModel.js`:

```js
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});
```

such that the import of the password data doesn't cause a re-hashing with bcrypt. 

# Features

- List of available tours
  - Users can see the tours available and the information pertaining to them ![image](https://github.com/user-attachments/assets/48ff967b-2ccb-4c9f-b7ac-8f5cdf06e2e9)
- Detailed tour information with a map that has all locations and dates of the tour ![image](https://github.com/user-attachments/assets/f9aa5a09-0167-4b94-9be8-c88999a80164)
- Create user reviews (back-end only)
- Back-end to create new tours and edit existing tours
- Account page with a separate admin panel (non-functional - purely aesthetic)
  - Ability to update personal information and user avatar (using AWS S3 Buckets) ![image](https://github.com/user-attachments/assets/9e121bd1-8377-4d55-9c3c-872039e553c7)
- Simulate a tour booking payment with Stripe.js ![image](https://github.com/user-attachments/assets/e466b070-b381-499b-a443-eb7df78c546b)
- List of booked tours: ![image](https://github.com/user-attachments/assets/5841f2ba-1427-4c29-b253-c20c620110e8)

 
  
