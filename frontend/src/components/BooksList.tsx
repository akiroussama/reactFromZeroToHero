// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import React from "react";

const GET_BOOKS_LIST = gql`
  query BooksList {
    books {
      id
      title
    }
  }
`;

export type BookData = {
  id: string;
  title: string;
  author: string;
};

const BooksList = () => {
  const { data, loading, error } = useQuery(GET_BOOKS_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return data.books.map((BookData) => (
    <div key={BookData.id}>
      <h3>{BookData.title}</h3>
      <br />
    </div>
  ));
};

export default BooksList;
