import { useState, useEffect } from "react";

export default function CallDropdown({ buttonText, className }) {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const closeDropdown = () => {
      setOpen(false);
    };

    window.addEventListener("click", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
    };

  }, []);

  return (
    <div className="callWrapper">

      <button
        className={className}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {buttonText}
      </button>

      {open && (
        <div className="callDropdown">
          <a href="tel:3373812003">📞 Call</a>
          <a href="sms:3373812003">💬 Text</a>
        </div>
      )}

    </div>
  );
}