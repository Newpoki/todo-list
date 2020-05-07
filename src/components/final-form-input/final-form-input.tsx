/** Imports NPM */
import React, { memo, useCallback, ChangeEvent } from "react";
import { Field } from "react-final-form";

/** Imports locaux */
import { IInputType } from "../input/input.interfaces";
import { Input } from "components";
import { getFieldStatus } from "common-utils";
import { IFinalFormFieldProps } from "./final-form-input.interfaces";

/**
 * Composant FinalFormField qui fait une abstraction du <Field /> de React Final Form
 * et du composant <Input />
 */
export const FinalFormInput = memo(
  ({
    validate = undefined,
    name,
    type,
    onChanged,
    onBlured,
    onFocused,
    withoutBlurValidation = false,
    ...others
  }: IFinalFormFieldProps) => {
    return (
      <Field
        validate={validate}
        name={name}
        type={type as IInputType}
        render={({ input, meta }) => {
          const { onChange, onBlur, onFocus, value } = input;
          const fieldStatus = getFieldStatus(meta);
          /** String contenant un espace permet de ne pas créer un effet laggy quand le message d'erreur apparait */
          const helperText = fieldStatus === "error" ? meta.error : " ";

          const handleChange = useCallback(
            (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              onChange(evt);
              onChanged && onChanged(evt, value);
            },
            [onChange, value]
          );

          const handleFocus = useCallback(
            (evt) => {
              onFocus(evt);
              onFocused && onFocused(evt);
            },
            [onFocus]
          );

          const handleBlur = useCallback(
            (evt) => {
              !withoutBlurValidation && onBlur(evt);
              onBlured && onBlured(evt);
            },
            [onBlur]
          );

          return (
            <Input
              {...input}
              {...others}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={input.type as IInputType}
              status={fieldStatus}
              helperText={helperText}
            />
          );
        }}
      />
    );
  }
);
