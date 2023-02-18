/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActivityReport } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActivityReportUpdateFormInputValues = {
    name?: string;
    message?: string;
    location?: string;
    image?: string;
};
export declare type ActivityReportUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityReportUpdateFormOverridesProps = {
    ActivityReportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityReportUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActivityReportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    activityReport?: ActivityReport;
    onSubmit?: (fields: ActivityReportUpdateFormInputValues) => ActivityReportUpdateFormInputValues;
    onSuccess?: (fields: ActivityReportUpdateFormInputValues) => void;
    onError?: (fields: ActivityReportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityReportUpdateFormInputValues) => ActivityReportUpdateFormInputValues;
    onValidate?: ActivityReportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityReportUpdateForm(props: ActivityReportUpdateFormProps): React.ReactElement;
