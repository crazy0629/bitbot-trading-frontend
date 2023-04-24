import { notification } from "antd";

const openNotification = (type, text) => {
  notification[type]({
    message: `Notification`,
    description: text,
    placement: "topRight",
  });
};

export default openNotification;
