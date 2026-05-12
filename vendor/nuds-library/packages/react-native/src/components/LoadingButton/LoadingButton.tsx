import React from "react";
import { Button } from "../Button";
import type { ButtonProps } from "../Button";

export type LoadingButtonProps = Omit<ButtonProps, "loading"> & {
  isLoading?: boolean;
};

export const LoadingButton = ({ isLoading = false, ...rest }: LoadingButtonProps) => {
  return <Button loading={isLoading} {...rest} />;
};
