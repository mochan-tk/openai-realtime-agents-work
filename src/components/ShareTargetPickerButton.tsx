"use client";
import React from "react";

type Props = {
  liffObject: typeof import("@line/liff").default | null;
};

const ShareTargetPickerButton: React.FC<Props> = ({ liffObject }) => {
  const handleClick = async () => {
    if (!liffObject) {
      alert("LIFFが初期化されていません");
      return;
    }
    try {
      const res = await liffObject.shareTargetPicker(
        [{ type: "text", text: "Hello, World!" }],
        { isMultiple: true }
      );
      if (res) {
        alert(`[${res.status}] Message sent!`);
      } else {
        alert("TargetPicker was closed!");
      }
    } catch {
      alert("something wrong happen");
    }
  };

  return (
    <button
      className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition"
      onClick={handleClick}
    >
      LINEでシェア
    </button>
  );
};

export default ShareTargetPickerButton;
