import { useParams } from "react-router-dom"

const Redirect = () => {
  const { linkid } = useParams()
  console.log(linkid);
  return (
    <div>Redirect</div>
  )
}

export default Redirect