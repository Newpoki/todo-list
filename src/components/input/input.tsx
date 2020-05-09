/** Imports NPM */
import React, { FocusEvent, memo, useCallback, KeyboardEvent } from "react";
import { TextField } from "@material-ui/core";

/** Import Locaux */
import { getInputStyle } from "./input.styles";
import { IInputProps } from "./input.interfaces";

/** Composant qui affiche un champ Input */
export const Input = memo(
  ({
    label,
    onChange,
    onBlur,
    onFocus,
    onKeyUp,
    variant = "outlined",
    value,
    id,
    name,
    status = "unchecked",
    fullWidth = false,
    type = "text",
    isDisabled = false,
    multiline = false,
    helperText = " ",
  }: IInputProps) => {
    const classes = getInputStyle();

    const handleBlur = useCallback(
      (evt: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur && onBlur(evt);
      },
      [onBlur]
    );

    const handleFocus = useCallback(
      (evt: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onFocus && onFocus(evt);
      },
      [onFocus]
    );

    const handleKeyUp = useCallback(
      (evt: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onKeyUp && onKeyUp(evt);
      },
      [onKeyUp]
    );

    return (
      <TextField
        name={name + Math.random()}
        label={label}
        onChange={onChange}
        variant={variant}
        value={value}
        id={id}
        onBlur={handleBlur}
        error={status === "error"}
        fullWidth={fullWidth}
        multiline={multiline}
        disabled={isDisabled}
        className={classes.root}
        helperText={helperText}
        inputProps={{
          onBlur: handleBlur,
          onFocus: handleFocus,
          onKeyUp: handleKeyUp,
          type,
        }}
      />
    );
  }
);
