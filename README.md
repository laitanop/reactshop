# ReactShop

React Based Shop based on ETSY type product.
Uses Firebase as a backend store and authentication platform.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Note: this instructions assume you have a *NIX type terminal.










<a href="http://localhost:3000/checkout?data=U2FsdGVkX1%2FGrY9Nomm2fzaoZ3hFTgOf6j3cACxO6TRBl5K7up9tEozVh%2FMncRo9YKR18Yt04zHT9jIL8%2FCjbGgY1O8av13LdYLqDIvwmRt1Gh1BEbJI43iCFuzBt1CV0fknMYpTiiH4Zj3Wv2Xg6IJbX1SsyVjgw2XWMZsbDRPWmd3hm4Od%2BQS3mOovZw%2Fa%2BYzsQ%2Bm6%2BfLSmJgVD%2FifAi%2Fppgs9Gwcpf620POOCzFmJF%2FbrTMkbKZSVRmLJ4iCL91uixvlHjSuTZXZ663txE2yFcBVjmtyavopLlOF98gWj7DQAlTaBz43pDJBZbJxdnh2ZBJ%2FryaGsfhZOtORhk%2Bu%2FcQRsUbhzF9caQMeWD4HsNNBJZpzGEUpObXIb%2FSG%2BPknoir8vflPKR37zZFrTTg%3D%3D">
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
