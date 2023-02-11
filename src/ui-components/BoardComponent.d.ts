/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Board, Person } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoardComponentOverridesProps = {
    BoardComponent?: PrimitiveOverrideProps<ViewProps>;
    Message?: PrimitiveOverrideProps<TextProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BoardComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    board?: Board;
    person?: Person;
} & {
    overrides?: BoardComponentOverridesProps | undefined | null;
}>;
export default function BoardComponent(props: BoardComponentProps): React.ReactElement;
