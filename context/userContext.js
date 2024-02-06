import { useQueries } from "@/hooks/useQueries";
import Cookies from "js-cookie";
import { createContext } from "react";

export const userContext = createContext({})

export function userContextProvider({children, ...props}) {
  const { data : userData} = useQueries({
    prefixUrl: "https://paace-f178cafcae7b.nevacloud.io/api/user/me",
    header: { Authorization: `Bearer ${Cookies.get("token")}`}
  })

  return(
    <userContext.Provider value={userData?.data || null} {...props} >
      {children}
    </userContext.Provider>

  )
}