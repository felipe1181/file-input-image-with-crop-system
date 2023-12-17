import { ReactNode } from "react";
import Button from "../form/button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={onClose}
            ></div>
            <div className="bg-white p-4 z-10 relative flex flex-col  items-end">
              <Button
                className="bg-red-400 rounded w-[25px] h-[25px] text-white mb-3"
                onClick={onClose}
              >
                X
              </Button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
