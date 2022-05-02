import { useParams } from 'react-router-dom'

export default function Article() {
   const params = useParams()
   console.log(params.id);
  return (
    <div>
       Article page
    </div>
  )
}
