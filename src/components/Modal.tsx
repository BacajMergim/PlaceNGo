import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import React from "react";

interface Props {
  visible?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  showModal: boolean;
  width?: string;
  dialogClassName?: string;
}

export default function Modal(props: Props) {
  return (
    <Transition appear show={props.showModal} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-10 `}
        open={props.showModal}
        onClose={props.onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel>
                <div
                  className={`transform overflow-hidden rounded-lg bg-blue-darker p-${props.width} text-left align-middle shadow-xl transition-all ${props.dialogClassName}`}
                >
                  <div className="relative">{props.children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
