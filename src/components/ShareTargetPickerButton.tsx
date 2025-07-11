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
        [{ type: "text", text: "便利な音声アプリ使ってみてね！ > https://miniapp.line.me/2007594476-VB9D5r5k" }],
        { isMultiple: true }
      );
      if (res) {
        // alert(`[${res.status}] Message sent!`);
      } else {
        // alert("TargetPicker was closed!");
      }
    } catch {
      alert("something wrong happen");
    }
  };

  return (
    <button
      className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition"
      onClick={handleClick}
    >
      LINEでシェア
    </button>
  );
};

export default ShareTargetPickerButton;
