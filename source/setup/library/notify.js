import { getNotificationSystem } from "../components/Notifier.js";

export function notifyError(title, message) {
    const notifications = getNotificationSystem();
    notifications.addNotification({
        title,
        message,
        autoDismiss: 0,
        level: "error"
    });
}
