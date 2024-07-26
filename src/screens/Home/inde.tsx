import { Image, View } from "react-native";
import { Title, TextTitle, IconTitle } from "./styles";

const iconImg = require("../../assets/img/vector.png");

export function Home(){
    return(
        <>
            <Title>
               <TextTitle>To-Do</TextTitle>
               <IconTitle source={iconImg}/>
            </Title>
        </>
    );
}