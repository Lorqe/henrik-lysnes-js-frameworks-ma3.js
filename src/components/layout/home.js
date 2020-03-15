import React from 'react';
import Heading from "../heading";
import HomeContent from "../homecontent";

export function Home() {
    return (
        <>
        <Heading title="Home"></Heading>
        <HomeContent children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></HomeContent>
        </>
    );
}

export default Home;