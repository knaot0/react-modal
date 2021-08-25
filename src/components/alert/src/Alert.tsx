import React from "react";
import { Modal, ModalProps } from "../../modal";

export type AlertProps = Pick<ModalProps, "isOpen" | "onClose"> & {
  title?: string;
  description: string;
};

export const Alert: React.VFC<AlertProps> = ({
  isOpen,
  title = "エラー",
  description,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{title}</h2>
      <div>{description}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 20,
        }}
      >
        <button
          style={{
            backgroundColor: "yellow",
            borderColor: "yellow",
            padding: 10,
            borderRadius: 20,
          }}
          onClick={onClose}
        >
          閉じる
        </button>
      </div>
    </Modal>
  );
};
