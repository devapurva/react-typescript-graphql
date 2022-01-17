# Getting Started with Create React App

This project is made using React + Typescript + Material UI + GraphQL base.

## Local Setup

#### Prerequisites
Your system must have Node v10.16.3+.

1. Clone - `https://github.com/devapurva/react-typescript-graphql.git`
2. Material UI Directory - `cd _material-ui`
2. Install required packages using - `npm i`
3. Run Application : `npm run start`

## Component Structure `(./src)`

#### [`./pages`](https://github.com/devapurva/react-typescript-graphql/tree/master/_material-ui/src/pages)

All pages are listed in this folder. 
~ PageOne: Job Listing components. 
~ Page404: 404 page for unlisted routes

#### [`./components`](https://github.com/devapurva/react-typescript-graphql/tree/master/_material-ui/src/components)

All resuable components/fragments can be found in this folder. 
~ @material-extend: Base Material components imported from [Material UI](https://mui.com/)
~ animate: Button, Modal, Text, etc animations components. 
~ settings: components to handle theme, rtl, etc. 

#### [`./apolloClient`](https://github.com/devapurva/react-typescript-graphql/tree/master/_material-ui/src/apolloClient)

Apollo Client base setup along with APIs.
~ `./api`[https://github.com/devapurva/react-typescript-graphql/tree/master/_material-ui/src/apolloClient/api]: Job Listing api query. 


#### [`./routes`](https://github.com/devapurva/react-typescript-graphql/tree/master/_material-ui/src/routes)

All Routes and related logic is handled here. 
~ path.ts: Common JSON for scalibility and readibility. 
~ index.tsx: Lazy loading, suspense fallback, routes handling. 


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
