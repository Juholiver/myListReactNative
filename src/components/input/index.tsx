import React, { forwardRef, Fragment, LegacyRef } from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity, TextStyle, StyleProp   } from "react-native";

import {style} from "./style";
import {FontAwesome, MaterialIcons, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";


type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
    height?: number,
    labelStyle?:StyleProp<TextStyle>,
};

export const Input = forwardRef((props: Props, ref: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress,height,labelStyle, ...rest } = props;
    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return "80%";
        }
        if (IconLeft || IconRight) {
            return "90%";
        }
        return "100%";
    };

        const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        }
        if (IconLeft || IconRight) {
            return 10;
        }
        return 20;
    };

    return (
        <Fragment>

            {title && <Text style={[style.titleInput, labelStyle]}>{title}</Text>}
            <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft(), height: height || 40 }]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        style.input, { width: calculateSizeWidth(), height: "100%"}
                    ]}
                    {... rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={iconRightName as any} size={20} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    );
});