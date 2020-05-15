import { useMemo, useCallback } from "react";
import { toast, ToastOptions } from "react-toastify";
import React from "react";
import { Notification, INotificationProps } from "components";

export const useNotification = () => {
  const addNotification = useCallback(
    (notification: INotificationProps, options?: Omit<ToastOptions, "type">) => {
      const notificationOptions: ToastOptions = { ...options, type: notification.type };

      toast(<Notification {...notification} />, notificationOptions);
    },
    []
  );

  return useMemo(
    () => ({
      addNotification,
    }),
    [addNotification]
  );
};
