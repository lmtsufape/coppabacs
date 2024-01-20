import { ReactNode, useEffect, useState } from "react";
import { useMutation } from "react-query";
import api from "@/api/http-common";
import { getStorageItem } from "@/utils/localStore";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants/approutes";
import { useDispatch, useSelector } from 'react-redux';
//import { setArray } from '@/redux/categories/categoriesSlice';
import { RootState} from '@/redux/store';
//import { postValidateToken } from "@/api/login/postValidateToken";
//to implemente
//import { getCategory } from "@/api/category/getCategory";

//verificar como vai funcionar o props utilizando o children:ReactNode
const PrivateRoute = props  => {

  const {authorized, setAuthorized} = useState(false);
  const {roken, setToken} = useState(getStorageItem("token"));
  //o state deveria ser do tipo RootState
  const bancosSementes = useSelector((state) => state.bancosSementes);
  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    console.log("token", token);
    api.defaults.headers.authorization = `Bearer ${token}`;
    if(token != undefined){
      mutete();
    }else{
      push(APP_ROUTES.public.home);
    }
  });


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
  const { statusBancosSementes, mutateBancosSementes} = useMutation (
    async () => {
      return getBancosSementes();
    },
    {
      onSuccess: (res) => {
        dispatch(setArray(res.data));
        setAuthorized(true);
      },
      onError: (error) => {
        console.log(error);
        push(APP_ROUTES.public.home);
      },
    }
  )
  return( 
    <>
      {authorized && children}
    </>
  )

}

export default PrivateRoute;