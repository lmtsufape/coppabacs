import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getStorageItem } from "@/utils/localStore";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/app-routes";
import { useDispatch, useSelector } from 'react-redux';
import { RootState} from '@/redux/store';

import api from "@/api/http-common";
//verificar como vai funcionar o props utilizando o children:ReactNode
const PrivateRoute = (props)  => {

  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState(getStorageItem("token"));
  //o state deveria ser do tipo RootState 
  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    api.defaults.headers.authorization = `${token}`;
    if(token != undefined){
    //  mutate();
    setAuthorized(true);
    }else{
      push(APP_ROUTES.public.home);
    }
  }, [token, push]);

/**
 * 
const{ status, mutate } = useMutation(
  async () => {
    return postValidateToken(token);
  },
  {
    onSuccess: (res) => {
      if(res.data){
        setAuthorized(true);
      }else{
        setAuthorized(false);
        push(APP_ROUTES.public.home);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  }
)
 */

  return( 
    <>
      {authorized && props.children}
    </>
  )

}

export default PrivateRoute;