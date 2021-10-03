// import { useRouter } from "next/dist/client/router"
// import Link from 'next/link'

import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
    // const router=useRouter() 
    // const newsId=router.query.newsId;
    return(
        <section className={classes.detail}>
   <img scr={props.image} alt={props.title}/>
   <h1>{props.title}</h1>
   <address>{props.address}</address>
   </section>
    )
}
export default MeetupDetail;