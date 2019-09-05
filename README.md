# ReactShop

React Based Shop based on ETSY type product.
Uses Firebase as a backend store and authentication platform.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Note: this instructions assume you have a *NIX type terminal.



<a href="http://localhost:3000/checkout?data=U2FsdGVkX19BsxMeOZMWOqtYOxt0wtW%2BgWpZELa1ysTCn0KwPgkhFtczHcq1Y0qyerwFLjmtUsvCNhhtp0fP%2B8n3Kp%2FHotbBG85C%2FJ%2Br3pwPMHi%2FA40qEdH2WIJwBpvLOuJbiIdS5%2BmofhlqIxXJx%2F%2BM%2BD6rnArXj3Qycdf8R7VHanhEW%2FwZrwcV2WIWZQewdezLBPdtC5kF5u30GYaOzB1fzPu6hm5TSlDiuP%2B8UIgnKJa3QCpRIAnnUX1UKqAq%2BgERvEnfXIgYxar9okKmWSVgZWW6iyceNMKB41Y3H5J4Xm1DfdBIKtT1aLgIKkIKmMB%2BYZK5UttOGvUHFz8ifJocBAzqkGfKX1kQfk7jyw9YVSsfOfEXBSLdWpybZMsx55crs%2BT9ordeen1yx25yDw%3D%3D">
    <img src="https://stablepay.io/static/DonationsButtonBlueBlack.svg" >
</a>


### Prerequisites
You need to have node and npm or yarn install in your local machine.
You can clone the repository or download the zip file.

```
git clone https://github.com/laitanop/reactshop.git
```

### Installing

Once you have the code in your local machine follow these steps.

```
npm install or yarn install
```

Then you need to create in your development environment 
a file named development.env on a directory called config.

```
mkdir config
cd config
touch development.env
```

You will need to add the following API keys to the development.env file
to make it work on your local environment. Please note that the
value should not have any quotes or curly braces. e.g. API_KEY=asdqwe1kj1l2l1231231

API_KEY={replace with your firebase api data}

AUTH_DOMAIN={replace with your firebase api data}

DATABASE_URL={replace with your firebase api data}

STORAGE_BUCKET={replace with your firebase api data}

MESSAGING_SENDER_ID={replace with your firebase api data}

## Running the tests

```
npm run test
```

## Deployment

The project is ready to deploy in Heroku or Dokku PAAS.
You should just add the Firebase API variables in your production environment.

## Built With

* [React](https://facebook.github.io/react/) - Awesome JS View Library
* [Redux](http://redux.js.org/docs/introduction/) - State Management
* [Firebase](https://firebase.google.com/) - Used for the store data backend

## Authors

* **Pamela Laitano** - *Initial work* - [laitanop](https://github.com/laitanop)
* **Doug Molina** - *contributor* - [dmolina79](https://github.com/dmolina79/)

See also the list of [contributors]() who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This is a project for CoralBytes Studios (https://www.coralbytes.com)
* Facebook for an google for all the awesome modern tools for web developers
