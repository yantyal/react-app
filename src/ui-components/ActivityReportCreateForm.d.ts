/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivityReportCreateFormInputValues = {
    name?: string;
    message?: string;
    location?: string;
    image?: string;
};
export declare type ActivityReportCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityReportCreateFormOverridesProps = {
    ActivityReportCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityReportCreateFormProps = React.PropsWithChildren<{
    overrides?: ActivityReportCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActivityReportCreateFormInputValues) => ActivityReportCreateFormInputValues;
    onSuccess?: (fields: ActivityReportCreateFormInputValues) => void;
    onError?: (fields: ActivityReportCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityReportCreateFormInputValues) => ActivityReportCreateFormInputValues;
    onValidate?: ActivityReportCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityReportCreateForm(props: ActivityReportCreateFormProps): React.ReactElement;
