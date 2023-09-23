import { useParams } from "react-router-dom"
import { getItemData } from '@/utility/MgLocalStore';


const Redirect = () => {
  const { linkid } = useParams()
  const remain = getItemData("allshortlinks");
  let redirectLink = '';
  if (remain) {
    const remaining = remain.filter((ele) => (ele.id === linkid ? ele : ""));
    redirectLink = remaining[0].value;
    window.location.href = redirectLink;
  }
  return (
    <div>Redirect to {redirectLink}</div>
  )
}

export default Redirect