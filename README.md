# crispy-couscous

React app prototype using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) and [React Router v6](https://reactrouter.com/). 

## Setup

### Installation 

```bash
$ git clone git@github.com:dismorfo/crispy-couscous.git
```

### Install dependencies 

```bash
$ cd crispy-couscous && npm install
```

## Getting started 

When running this app, be sure to:

1. Add environment information file 
   
```
cp .env.example .env
```

2. Add your environment information. E.g., 

```
REACT_APP_BOOK_URL=http://abc.xyz
REACT_APP_API_VIEWER=http://def.xyz
# Set GENERATE_SOURCEMAP to true or false
GENERATE_SOURCEMAP=true
```
See [create-react-app configuration](https://create-react-app.dev/docs/advanced-configuration/).

3. To start the development server:

```
npm start
```
