/**
 * @file モーダル
 */

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./modal.module.scss";
import { withPortal } from "./with-portal";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const _Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const isHidden = !isOpen;

  return (
    <div
      onClick={onClose}
      className={classNames(styles.overlay, {
        [styles["--hidden"]]: isHidden,
      })}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const Modal = withPortal(_Modal);
