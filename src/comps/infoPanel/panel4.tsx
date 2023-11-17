import React from "react";

const Panel4 = () => {
  return (
    <section className="grid grid-cols-2 bg-panel4">
      <div className="grid gap-4 h-2/3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          unde temporibus vitae eaque reprehenderit magni ut at possimus. Quia
          illum voluptates distinctio velit earum amet cum asperiores enim
          obcaecati ut.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          unde temporibus vitae eaque reprehenderit magni ut at possimus. Quia
          illum voluptates distinctio velit earum amet cum asperiores enim
          obcaecati ut.
        </p>
      </div>
      <div className="flex justify-center align-middle">
        <iframe
          width="480"
          height="340"
          className="self-center rounded-xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </section>
  );
};

export default Panel4;
