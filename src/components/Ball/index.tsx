import React from "react";
import { View } from "react-native";
import { style } from "./style";

type BallProps = {
    color  : string;
}

export function Ball({...rest}:BallProps) {
    return (
        <View style={[style.ball, {borderColor:rest.color || "gray"} ]} />
    );
}
