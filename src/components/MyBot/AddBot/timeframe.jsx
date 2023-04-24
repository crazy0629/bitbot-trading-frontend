import React, { useState } from "react";

import { TimeFrameWrapper } from "./add.style";
import { Input, Select } from "antd";

const TimeFrameComponent = () => {
  const [timeValue, setTimeValue] = useState(1);
  const [timePrefix, setTimePrefix] = useState("M");
  return (
    <TimeFrameWrapper>
      <Input
        className="custom-input"
        placeholder="1M"
        value={`${timeValue}${timePrefix}`}
        readOnly
      />
      <Select
        className="custom-select"
        defaultValue="1"
        options={[...Array(60)].map((i, id) => ({
          value: id + 1,
          label: id + 1,
        }))}
        onChange={(e) => setTimeValue(e)}
      />
      <Select
        className="custom-select"
        defaultValue="MINUTE"
        options={[
          { value: "MINUTE", label: "MINUTE" },
          { value: "HOUR", label: "HOUR" },
          { value: "DAY", label: "DAY" },
          { value: "WEEK", label: "WEEK" },
        ]}
        onChange={(e) => setTimePrefix(e.at(0))}
      />
    </TimeFrameWrapper>
  );
};

export default TimeFrameComponent;
