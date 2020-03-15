import React from 'react';
import Heading from "../heading";
import NewsList from "../newslist";

export function Home() {
    return (
        <>
        <Heading title="News"></Heading>
        <NewsList></NewsList>
        </>
    );
}

export default Home;