// import { useRouter } from "next/dist/client/router"
// import Link from 'next/link'
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
    // const router=useRouter() // now we have access to router object which has different properties( different pieces of data ) . 
    // const newsId=router.query.newsId;  // this will show us the url we entered for example hello-world . 

    // here for example we could fetch from API the newsId to load it . 


    return(
   <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Deutschesmuseum2.jpg/260px-Deutschesmuseum2.jpg' title="dfghj" address="dfghjk"/>
   // does max forgot to delete these hard coded props annd replace it with the below dynamic props ?!?
    )
}
export default MeetupDetails;

export async function getStaticPaths(){
    return{
        fallback:true,
        paths:[
            {params:{meetupId:'m1'}},
            {params:{ meetupId:'m2'}}
        ]
    }
}

export async function getStaticProps(context){

    const meetupId=context.params.meetupId;
    // context and params are default reserved names 
    //meetupId is the name of dynamic url for a folder which contains this index.js file 
    // this is the folder name on pages folder : [meetupid]
    console.log(meetupId);
    // this console log will be shown on terminal of VSC not on console of our browser since it is logged on a pre-geneerated page.
    return{
        props:{
            meetupdata:{
                id:"m1",
                title:'hellow there',
                address:'dfghj ghjkjhghjqqqqqqqq'
            }
        }
    }
}