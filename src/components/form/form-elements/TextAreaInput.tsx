import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function TextAreaInput() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  
  const handleTextAreaChange = (value: string | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (typeof value === 'string') {
      return value;
    }
    return value.target.value;
  };
  
  return (
    <ComponentCard title="Textarea input field">
      <div className="space-y-6">
        {/* Default TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(handleTextAreaChange(value))}
            rows={6}
          />
        </div>

        {/* Disabled TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea rows={6} disabled />
        </div>

        {/* Error TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea
            rows={6}
            value={messageTwo}
            error
            onChange={(value) => setMessageTwo(handleTextAreaChange(value))}
            hint="Please enter a valid message."
          />
        </div>
      </div>
    </ComponentCard>
  );
}
