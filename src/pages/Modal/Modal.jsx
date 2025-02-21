import React, { useEffect, useState } from "react";
import RecoverForm from "../RecoverForm/RecoverForm";
import { useParams } from "react-router-dom";

const Modal = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:5000/items/${id}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [id]);
  
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <RecoverForm item={item} />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
