This is a [Next.js](https://nextjs.org/) to implement **Front Engineer Technical Test** on [Deall](https://usedeall.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stacks

Stacks that I've used to build are:

- [ReactJS](https://reactjs.org/) 
- [Next.js](https://nextjs.org/) 
- [Axios](https://axios-http.com/) 
- [TypeScript](https://www.typescriptlang.org/) 

## B3k3n API Feedbacks
After all features implemented using API, here are feedbacks to services. 
- Books API return all books from categories if there's no `categoryId` on parameter
- Data from Books API would be nice if provided with total books to implement maximum page on pagination
- Books give empty array or response message that indicate there's no data on out of range page or no books on spesific `categoryId`
- Some book's content are same with other but different `id`, leading to duplicate bookmark possibility if filter using `id`

