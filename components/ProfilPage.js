import React from "react";
import Image from "next/image";

const profilPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen p-[3.65rem] bg-gray-800">
      <h1 className="font-bold text-2xl text-white mb-6">Profil Pengguna</h1>
      <Image
        className="rounded-full"
        src="/profile.png"
        width={90}
        height={90}
      ></Image>
      <div className="flex flex-col justify-center items-start w-96 my-1 ">
        <p className="text-white text-sm ">Nama Lengkap</p>
        <p className="flex items-center justify-start bg-gray-200 w-full py-2 pl-3 rounded-[15px] text-gray-800">
          Chom
        </p>
      </div>
      <div className="flex flex-col justify-start items-start w-96 my-1 ">
        <p className="text-white text-sm ">Email</p>
        <p className="flex items-center justify-start bg-gray-200 w-full py-2 pl-3 rounded-[15px] text-gray-800">
          chom@gmail.com
        </p>
      </div>
      <div className="flex flex-col justify-start items-start w-96 my-1 ">
        <p className="text-white text-sm ">Nomor Hp</p>
        <p className="flex items-center justify-start bg-gray-200 w-full py-2 pl-3 rounded-[15px] text-gray-800">
          087635796143
        </p>
      </div>
      <div className="flex flex-col justify-start items-start w-96 my-1 ">
        <p className="text-white text-sm ">Password</p>
        <p className="flex items-center justify-start bg-gray-200 w-full py-2 pl-3 rounded-[15px] text-gray-800">
          ************
        </p>
      </div>
      <div className="flex justify-around items-center w-96 py-4">
        <button
          type="button"
          className="bg-gray-200 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-full text-sm px-5 py-2.5 text-center font-bold w-1/3"
        >
          Hapus
        </button>
        <button
          type="button"
          className="bg-gray-200 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-full text-sm px-5 py-2.5 text-center font-bold w-1/3"
        >
          Ubah
        </button>
      </div>
    </div>
  );
};

export default profilPage;
