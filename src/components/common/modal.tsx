"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

import { createPortal } from "react-dom";

import { useModalPosition } from "@/hooks/use-modal-position";

import Overlay from "./overlay";

export default function Modal({
  children,
  id,
}: PropsWithChildren<{ id: string }>) {
  const { back } = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => back();

  const { position } = useModalPosition(modalRef, id);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
      modalRef.current?.scrollTo({
        top: 0,
      });
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <>
      <Overlay />
      <dialog
        ref={modalRef}
        style={position}
        onClose={closeModal}
        onClick={(e) => {
          if ((e.target as HTMLDialogElement).nodeName === "DIALOG") {
            closeModal();
          }
        }}
        className="fixed z-50 w-full max-w-2xl max-h-[80vh] divide-y rounded-t-lg bg-gray-950 border-white scrollbar-hide"
      >
        <div className="relative">
          <div className="flex justify-end ">
            <button
              onClick={() => closeModal()}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </dialog>
    </>,
    document.getElementById("main") as HTMLElement
  );
}
