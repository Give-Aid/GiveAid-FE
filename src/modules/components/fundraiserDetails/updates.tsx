import React from "react";

type Props = {
  activeTab: string;
};

const Updates = ({ activeTab }: Props) => {
  const updates = false;
  return (
    <div
      id="Updates"
      className={`tabcontent ${activeTab === "Updates" ? "" : "hidden"}`}
    >
      {updates ? (
        <p className="font-[600] text-[22px] text-center">
          This fundraiser doesn&apos;t have an update yet.
        </p>
      ) : (
        <div className="mb-10">
          <p className="mb-2 font-[500] text-[18px] text-center">Friday, December 12, 2023</p>
          <p className="font-[300]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolor sit, doloribus quae placeat libero! Aspernatur optio asperiores laudantium hic ratione esse corrupti. Dolorem, odio rerum repudiandae sint saepe vero.
          Similique corporis quia officia suscipit aut architecto accusamus natus veritatis qui, porro iusto. Perferendis, dignissimos excepturi quos asperiores, molestias voluptatem maiores accusantium fugit natus obcaecati veritatis minima itaque culpa! Ipsum!
          Fugit quam expedita, saepe ex itaque illo nemo exercitationem recusandae deserunt odio? Fugit tempore praesentium error, provident obcaecati et quam molestiae qui ipsum, facere a quisquam repellendus corrupti dolore alias!</p>
        </div>
      )}
    </div>
  );
};

export default Updates;
