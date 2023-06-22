import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiCameraMovie } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

export const TutorialVideoPanelButtonModal = ({
  videoUrl,
}: {
  videoUrl: string;
}) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <button
        className="flex flex-row justify-between gap-3 [&>*]:my-auto cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => setOpen(true)}
      >
        Video <BiCameraMovie  />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex justify-center text-center sm:items-center sm:p-0 h-full sm:h-[80%] sm:mt-12">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-5xl sm:h-full flex-1">
                  <div id="modal-header" className="flex w-full pr-4 py-4 justify-between">
                    <Dialog.Title
                      as="h3"
                      className="pl-6 text-base font-semibold leading-6 text-gray-900 justify-between"
                    >
                      <div className="flex flex-row gap-3">
                        <p>Video</p>
                        <BiCameraMovie className="my-auto" />
                      </div>
                    </Dialog.Title>
                    <button
                      id="close-button"
                      className="ml-auto text-lg"
                      onClick={() => setOpen(false)}
                    >
                      <RxCross1 />
                    </button>
                  </div>
                  <div className="bg-white px-4 pb-4 sm:pb-4 h-[82%]">
                    <div className="flex-1 m-auto h-full w-full">
                      <iframe
                        allow="fullscreen"
                        className="h-full w-full rounded-md"
                        src={`https://www.youtube.com/embed/${videoUrl.slice(
                          -11
                        )}`}
                      />{" "}
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex sm:hidden mt-3 w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
