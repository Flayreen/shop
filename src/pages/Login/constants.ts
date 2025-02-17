import {LoginData} from "../../models/login.ts";
import * as Yup from "yup";

export const initialValues: LoginData = {
    username: "",
    password: "",
}

export const validationSchema = Yup.object({
    username: Yup.string()
        .required("Поле обовʼязкове до заповнення"),
    password: Yup.string()
        .min(5,"Пароль повинен мати мінім 5 символів")
        .required("Поле обовʼязкове до заповнення")
})