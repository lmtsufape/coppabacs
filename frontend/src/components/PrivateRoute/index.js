import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getStorageItem } from "@/utils/localStore";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import { useDispatch, useSelector } from 'react-redux';
import { RootState} from '@/redux/store';

import api from "@/api/http-common";
import { getCurrentUser } from "@/api/usuarios/getCurrentUser";
//verificar como vai funcionar o props utilizando o children:ReactNode
const PrivateRoute = (props)  => {
  const [authority, setAuthority] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState(getStorageItem("token"));
  //o state deveria ser do tipo RootState 
  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    api.defaults.headers.authorization = `${token}`;
    console.log("token:", token )
    if(token != undefined){
    //  mutate();
    setAuthorized(true);
    }else{
      push(APP_ROUTES.public.home);
    }
  }, [token, push]);
  return( 
    <>
      {authorized && props.children}
    </>
  )

}

export default PrivateRoute;