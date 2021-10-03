import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MeetupList from '../components/meetups/MeetupList';
import { useEffect, useState } from 'react';

const DUMMY_MEETUPS=[{
  id:'m1',
  title:'A first Meetup',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/M%C3%BCnchen_Hofgartentempel.jpg/266px-M%C3%BCnchen_Hofgartentempel.jpg',
  address:'Some Address 5, 34567 some city',
  description: 'description of this meetup'
},
{
  id:'m1',
  title:'A second Meetup',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Deutschesmuseum2.jpg/260px-Deutschesmuseum2.jpg',
  address:'Some Address 5, 34567 some city',
  description: 'description of this meetup'
},
{
  id:'m1',
  title:'A third Meetup',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/M%C3%BCnchen%2C_poort_bij_Karlsplatz_positie2_2012-08-05_09.56.jpg/266px-M%C3%BCnchen%2C_poort_bij_Karlsplatz_positie2_2012-08-05_09.56.jpg',
  address:'Some Address 6, 34567 some city',
  description: 'description of thissss meetup'
}
]

 function HomePage(props) {
    return (
    <MeetupList meetups={props.meetups}/> 
)
}
export default HomePage;

// the main function (Home) is closed here .

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      meetups : DUMMY_MEETUPS
    },
    revalidate:3600 // means every 1 hour 
  };
 }


