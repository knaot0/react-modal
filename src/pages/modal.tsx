/**
 * @file モーダルのテストページ
 */

import React from "react";
import { useAlert } from "../components/alert/src/use-alert";

const ModalPage = () => {
  const alert = useAlert();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    alert({
      title: 'Error',
      description: 'エラーが発生しました！'
    });
  }

  return (
    <main>
      <button onClick={handleClick}>Open Alert!</button>
    </main>
  );
};

export default ModalPage;
