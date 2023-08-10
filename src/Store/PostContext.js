import {createContext,useState} from 'react'

 export const postContext= createContext(null)


function Post({children}){
  const [postdetail, setpostdetail] = useState()
return(
  <postContext.Provider value ={{postdetail,setpostdetail}}>
    {children}
  </postContext.Provider>
)
}

export default Post