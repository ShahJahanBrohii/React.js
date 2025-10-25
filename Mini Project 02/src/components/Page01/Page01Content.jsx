import Page01LeftContent from "./Page01LeftContent"
import Page01RightContent from './Page01RightContent'

export const Page01Content = (props) => {

  // console.log(props.details);

  return (
    <div className="h-[77vh] flex gap-2 px-10 items-center justify-between">

    <Page01LeftContent />
    <Page01RightContent details = {props.details}/>

    </div>
  )
}

export default Page01Content
